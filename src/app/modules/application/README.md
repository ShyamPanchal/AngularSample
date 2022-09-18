Contains all the application-specific elements.

- Contains all the elements found in all projects.

---

To create a component here run the following command:

```
ng generate component modules/application/<component_name> --module=app

or

ng g c modules/application/<component_name> --module=app
```

---

To create modules in this folder use the following command:

```
ng generate module modules/application/<module_name> --routing  --module=app

or

ng g m modules/application/<module_name> --routing  --module=app
```

---

To create services in this folder use the following command:

```
ng generate service modules/application/<module-name>/<service-name>

or

ng g s modules/application/<module-name>/<service-name>
```

---

## Example

To create items module/component, run

```
ng g c modules/application/items --module=app
ng g m modules/application/items --routing  --module=app
```

to create services run

```
ng generate service modules/application/items/items
```

then in routes for `items-routing.module.ts` add the routing for base path

```
{ path: '', component: ItemsComponent }
```

then add the component to the `items.module.ts` file within the NgModule decorator

```
exports: [ItemsComponent],
declarations: [ItemsComponent],
providers: [ItemsService],
```
