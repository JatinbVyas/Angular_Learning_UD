import { NgModule } from '@angular/core';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [CardComponent],
  //Exports are the components, directives, and pipes that can be used in other modules.
  // This is useful when we want to share a component, directive, or pipe with other modules.
  // So whoever imports this shared module can use the CardComponent.
  exports: [CardComponent],
})
export class SharedModule {}
