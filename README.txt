Summary: Create a structural directive named unless that does the opposite of what *nfIf does. If the expression evalutes true, hide the hosts html block. If it evaluates false show it.

1. Create a block of text in your html.
2. Create a structural directive named unless with the @angular/cli (ng).
3. Create a property named isTemplateShowing and set it to false.
4. Use an input decorator to define a function named unless whose argument is the condition passed into the unless directive. unless="condition"
5. Write a function definiton for the unless function that uses the ViewContainerRef to hide and show the html block, and the templateRef to reference the html block in the template file.

Bonus: Add the unless directive to a component using the hostDirectives api.
