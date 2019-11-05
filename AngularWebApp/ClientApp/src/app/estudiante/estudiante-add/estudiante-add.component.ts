import { Component, OnInit, Input,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from 'src/models/estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {

  @Input() estudianteData = { idLector: 0, ci: '', nombre: '', dierccion: '', carrera: '',edad:0 };
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      dierccion: ['', Validators.required],
      carrera: ['', [Validators.required]],
      edad: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  addEstudiante() {
    this.submitted = true;
    this.loading = true;
  
    if (!this.registerForm.invalid) {
      const estudiante: Estudiante = Object.assign({}, this.registerForm.value);
       this.http.post<Estudiante>(this.baseUrl + 'estudiantes',estudiante).subscribe(result => {
         this.loading = false;
         this.router.navigate(['/estudiante-details/' + result.idLector]);
       }, error => {
         console.error(error);
         this.loading = false;
       });
    }
    this.loading = false;
   
  }

}
