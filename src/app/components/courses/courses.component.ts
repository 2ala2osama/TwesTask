import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {


  courses = [

    {
      "hours": "50 hr",
      "header": "Advance",
      "title": "Designing function block diagram, single line diagram, and schematic diagram",
      "name": "Troubleshooting electrical power destitution system and maintenance",
      "content": "Process Industrial Machines.",
      "use": "PLC and how it works."
    },
    {
      "hours": "15 hr",
      "header": "Basic",
      "title": "Introduction to electrical and electronic systems",
      "name": "Electrical and electronics system safeties",
      "content": "",
      "use": "How to use tools and equipment"

    },
    {
      "hours": "45 hr",
      "header": "Expert",
      "title": "Design low voltage electrical distribution system.",
      "name": "Design PLC automation panel",
      "content": "Repair electrical and electronic circuits",
      "use": "Deal with microcontrollers and microprocessors"
    },

  ];
}
