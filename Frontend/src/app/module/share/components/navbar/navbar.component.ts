import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';;
import { Router, RouterModule } from '@angular/router';
import { AuthComponent } from '../../../auth/auth.component';
import { Store, select } from '@ngrx/store';
import { AppState, UserState } from '../../../../models/AppState';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserInfo } from 'node:os';
import { UserService } from '../../../../State/User/user.service';
import { logoutSuccess } from '../../../../State/User/user.action';



@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        NavContentComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        CommonModule,
        NavContentComponent,
        MatDividerModule,
        HttpClientModule,
        RouterModule
    ]
})
export class NavbarComponent {

    profileMenu: any;
    isNavbarContentOpen: any;
    currentSection: any;
    userProfile!: any;
    constructor(
        private route: Router,
        private dilouge: MatDialog,
        private userService: UserService,
        private store: Store<AppState>,
        private http: HttpClient,
    ) {

    }

    ngOnInit() {
        this.userService.getUserProfile()

        this.store.select('user').subscribe(user=>{
            this.userProfile=user.userProfile
        })

        // this.store.pipe(
        //     select((store)=>store.user)
        // ).subscribe((user)=>{
        //     this.userProfile = user.userProfile
        //     this.dilouge.closeAll()
        // })
       
    }


    navigateTo(path: any) {
        this.route.navigate([path])
    }

    openNavbarContent(section: any) {
        this.isNavbarContentOpen = true;
        this.currentSection = section;
    }

    closeNavbarContent() {
        this.isNavbarContentOpen = false;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {

        const modelContainer = document.querySelector(".modal-container");
        const openButtons = document.querySelectorAll(".open-button")

        let clickInsideButton = false;

        openButtons.forEach((button: Element) => {
            if (button.contains(event.target as Node)) {
                clickInsideButton = true;
            }
        });

        if (modelContainer && !clickInsideButton && this.isNavbarContentOpen) {
            this.closeNavbarContent();
        }
    }

    handleLogOut = () => {
        localStorage.removeItem("jwt")
        this.store.dispatch(logoutSuccess())
    }

    handleOpenLoginModal = () => {

        this.dilouge.open(
            AuthComponent,
            {
                width: "400px",
                disableClose: false
            });
    }
}