import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/models/estudiante';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  estudiante:Estudiante;


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.http.get<Estudiante>(`${this.baseUrl}estudiantes/${this.route.snapshot.params['id']}`).subscribe(result => {
      this.estudiante = result;
      console.log(result, this.estudiante)
    }, error => console.error(error));
  }

}
