namespace todoapp;
using { cuid, managed } from '@sap/cds/common';

entity Todo: cuid, managed {
  text: String(36) not null;
  isDone: Boolean not null default false;
}
