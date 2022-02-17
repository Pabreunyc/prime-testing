import {NgModule} from '@angular/core';
/*
import {
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ContextMenuModule ,
    CodeHighlighterModule,
    DialogModule ,
    DropdownModule,
    FileUploadModule,
    InputMaskModule,
    InputTextModule,
    PanelModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    SliderModule,
    SplitButtonModule,
    TabViewModule,
    TooltipModule,
} from 'primeng/primeng';
*/

import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { CalendarModule} from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule} from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';


import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

import { BadgeModule } from 'primeng/badge';
import { ChipsModule}  from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FieldsetModule } from 'primeng/fieldset';
//import { AutoCompleteModule } from 'primeng/autocomplete';
//import { ChartModule } from 'primeng/chart';

@NgModule({
  exports: [
    AccordionModule,
    AvatarGroupModule,
    AvatarModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ContextMenuModule ,
    CodeHighlighterModule,
    DialogModule ,
    DropdownModule,
    FileUploadModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    RadioButtonModule,
    SliderModule,
    SplitButtonModule,
    TabViewModule,
    ToolbarModule,
    TooltipModule,

    BadgeModule,
    ChipsModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    MessageModule,
    SelectButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    ToggleButtonModule,
    TableModule,
    ToastModule,
    InputSwitchModule,
    InputMaskModule,
    FieldsetModule,
    MenuModule

    
  ]
})

export class PrimengModule {}
