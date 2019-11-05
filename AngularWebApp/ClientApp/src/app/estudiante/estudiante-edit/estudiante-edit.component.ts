import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/models/estudiante';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})
export class EstudianteEditComponent implements OnInit {

  estudiante: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.estudiante = this.formBuilder.group({
      idLector: ['', Validators.required],
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      dierccion: ['', Validators.required],
      carrera: ['', [Validators.required]],
      edad: ['', [Validators.required]]
    });

    this.http.get<Estudiante>(`${this.baseUrl}estudiantes/${this.route.snapshot.params['id']}`).subscribe(result => {
      Object.keys(result).forEach(key => {
        this.estudiante.controls[key].setValue(result[key]);
      })
      console.log(result, this.estudiante.value);
    }, error => console.error(error));

  }

  // convenience getter for easy access to form fields
  get f() { return this.estudiante.controls; }

  updateEstudiante() {
    this.submitted = true;
    this.loading = true;

    if (!this.estudiante.invalid) {
      try {
        const estudiante: Estudiante = Object.assign({}, this.estudiante.value);
        this.http.put<Estudiante>(`${this.baseUrl}Estudiantes/${this.route.snapshot.params['id']}`, estudiante)
          .subscribe(result => {
            console.log(result)
            this.loading = false;
            this.router.navigate(['/estudiantes']);
          })

       

      } catch (error) {
        console.log(error);
      }
      finally {
        this.loading = false;
      } 
    
    } 

  }

}
