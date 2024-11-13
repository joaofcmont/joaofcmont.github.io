import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: 'project', component: ProjectComponent},
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent},

];
