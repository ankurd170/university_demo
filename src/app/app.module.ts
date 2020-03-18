import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColnavbarComponent } from './colnavbar/colnavbar.component';
import { DisplaybarComponent } from './displaybar/displaybar.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MainroutRoutingModule} from './mainrout/mainrout-routing.module';
import { AdmissionComponent } from './admission/admission.component';
import { ClassesComponent } from './classes/classes.component';
import { HostelComponent } from './hostel/hostel.component';
import { HallComponent } from './hall/hall.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { PlacementComponent } from './placement/placement.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AntiraggingComponent } from './antiragging/antiragging.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { FooterComponent } from './footer/footer.component';
import { TypesComponent } from './types/types.component';
import { ActionsComponent } from './actions/actions.component';
import { GrievancesComponent } from './grievances/grievances.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { HomesectionComponent } from './homesection/homesection.component';
import { WrongurlComponent } from './wrongurl/wrongurl.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColnavbarComponent,
    DisplaybarComponent,
    HomeComponent,
    CoursesComponent,
    AdminComponent,
    StudentsComponent,
    GalleryComponent,
    ContactusComponent,
    AdmissionComponent,
    ClassesComponent,
    HostelComponent,
    HallComponent,
    PlacementComponent,
    AlumniComponent,
    AntiraggingComponent,
    ScholarshipsComponent,
    FooterComponent,
    TypesComponent,
    ActionsComponent,
    GrievancesComponent,
    ArtsComponent,
    ScienceComponent,
    EngineeringComponent,
    RulesComponent,
    AboutComponent,
    MessageComponent,
    HomesectionComponent,
    WrongurlComponent,
  ],
  imports: [
    BrowserModule,
    MainroutRoutingModule,
    CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule,ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
