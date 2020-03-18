import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { StudentsComponent } from '../students/students.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AdmissionComponent } from '../admission/admission.component';
import { ClassesComponent } from '../classes/classes.component';
import { HallComponent } from '../hall/hall.component';
import { HostelComponent } from '../hostel/hostel.component';
import { AlumniComponent } from '../alumni/alumni.component';
import { AntiraggingComponent } from '../antiragging/antiragging.component';
import { TypesComponent } from '../types/types.component';
import { ActionsComponent } from '../actions/actions.component';
import { ArtsComponent } from '../arts/arts.component';
import { ScienceComponent } from '../science/science.component';
import { EngineeringComponent } from '../engineering/engineering.component';
import { RulesComponent } from '../rules/rules.component';
import { PlacementComponent } from '../placement/placement.component';
import { ScholarshipsComponent } from '../scholarships/scholarships.component';
import { AboutComponent } from '../about/about.component';
import { MessageComponent } from '../message/message.component';
import { HomesectionComponent } from '../homesection/homesection.component';
import { WrongurlComponent } from '../wrongurl/wrongurl.component';


const routes: Routes = [
  {path:'',component:HomesectionComponent},
  {path:'home',component:HomeComponent,children:
[
  {path:'',component:HomesectionComponent},
{path:'message',component:MessageComponent}
]


},
  {path:'administration',component:AdminComponent},
  {path:'about',component:AboutComponent},
  {path:'students',component:StudentsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'scholarships',component:ScholarshipsComponent},
  {path:'classes',component:ClassesComponent},
  {path:'hall',component:HallComponent},
  {path:'message',component:MessageComponent},
  {path:'hostel',component:HostelComponent},
  {path:'alumni',component:AlumniComponent},
  {path:'placement',component:PlacementComponent},
  
  {path:'antiragging',component:AntiraggingComponent,children:
[
  {path:'',component:RulesComponent},
  {path:'rules',component:RulesComponent},
  {path:'types',component:TypesComponent},
  {path:'actions',component:ActionsComponent},
  {path:'arts',component:ArtsComponent},
  {path:'science',component:ScienceComponent},
  {path:'engineering',component:EngineeringComponent}
]
},
{path:'**',component:WrongurlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainroutRoutingModule { }
