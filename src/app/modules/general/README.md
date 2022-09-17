# General Modules

- Contains all the elements found in all projects.

---

To create a component here run the following command:

```
ng generate component modules/general/<component_name> --module=app

or

ng g c modules/general/<component_name> --module=app
```

---

To create modules in this folder use the following command:

```
ng generate module modules/general/<module_name> --routing  --module=app

or

ng g m modules/general/<module_name> --routing  --module=app
```

---

## Example

To create home module/component, run

```
ng g c modules/general/home --module=app
ng g m modules/general/home --routing  --module=app
```

then in routes for `home-routing.module.ts` add the routing for base path

```
{ path: '', component: HomeComponent }
```

then add the component to the `home.module.ts` file within the NgModule decorator

```
exports: [SignupComponent],
declarations: [SignupComponent],
```
