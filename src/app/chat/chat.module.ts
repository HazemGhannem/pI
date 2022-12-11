import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllchatComponent } from './allchat/allchat.component';
import { ShowmsgsComponent } from './showmsgs/showmsgs.component';


@NgModule({
  declarations: [
    ChatComponent,
    SidebarComponent,
    AllchatComponent,
    ShowmsgsComponent,
    
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class ChatModule { }
