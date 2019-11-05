import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from 'src/models/estudiante';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html'
})
export class EstudianteComponent {
  public estudiantes: Estudiante[];
  baseUrl: string;
  http: HttpClient;

  ngOnInit() {
    this.getEstudiantes();
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getEstudiantes() {
    this.http.get<Estudiante[]>(this.baseUrl + 'estudiantes').subscribe(result => {
      this.estudiantes = result;
      console.log(result, this.estudiantes)
    }, error => console.error(error));
  }

  add() {
    this.router.navigate(['/estudiante-add']);
  }

}
