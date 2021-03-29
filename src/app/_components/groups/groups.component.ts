import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/_models/group';
import { GroupService } from 'src/app/_services/group.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  response: any;
  admin: any;

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {
    //  this.groups = this.groupService.getGroups();
  }
  ngOnInit(): void {
    this.getGroups();
    this.test();
  }

  test():any{
    console.log("ok");
    
  }

  getGroups(): any {
    this.groupService.getGroupsRequest().subscribe(
      (data: any) => {

        this.response = data;
        console.log(this.response);
        
        // console.log("this is id :"+ this.response[0]._id);
        data.forEach(element => {          
          this.userService.getUserById(element.admin).subscribe(
            (admin: any) =>{
              this.admin = admin;
              // console.log(admin);
              
            }
          )
        });


      },
      err => {

      }
    );



  }
  


}
