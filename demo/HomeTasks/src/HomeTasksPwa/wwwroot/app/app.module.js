"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var todo_component_1 = require("./todo/todo.component");
var done_component_1 = require("./done/done.component");
var app_routing_1 = require("./app.routing");
var tasks_service_1 = require("./shared/tasks.service");
var users_service_1 = require("./shared/users.service");
var categories_service_1 = require("./shared/categories.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        providers: [
            app_routing_1.appRoutingProviders,
            tasks_service_1.TasksService,
            users_service_1.UsersService,
            categories_service_1.CategoriesService
        ],
        declarations: [
            app_component_1.AppComponent,
            todo_component_1.TodoComponent,
            done_component_1.DoneComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map