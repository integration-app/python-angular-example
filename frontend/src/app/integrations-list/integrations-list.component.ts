import { Component } from '@angular/core';
import { IntegrationAppClientService } from '../integration-app-client.service';


@Component({
  selector: 'app-integrations-list',
  templateUrl: './integrations-list.component.html',
})
export class IntegrationsListComponent {

  integrations: any
  iAppClient: any 

  constructor(private iAppService:IntegrationAppClientService) {}

  connect(integrationKey : string) {
    this.iAppClient.integration(integrationKey).connect().then(()=>{this.findIntegrations()})
    
  }

  disconnect(integrationKey : string) {
    this.iAppClient.integration(integrationKey).disconnect()
    this.findIntegrations()
  }

  findIntegrations() {
    this.iAppClient.integrations.find({}).then((data:any)=> {
      this.integrations = data.items
    })
  }

  configureContacts(integrationKey:string) {
    this.iAppClient.fieldMappingInstance({
      integrationKey: integrationKey,
      fieldMappingKey: "contacts",
      autoCreate: true
   }).openConfiguration()
  }

  configureCompanies(integrationKey:string) {
    this.iAppClient.fieldMappingInstance({
      integrationKey: integrationKey,
      fieldMappingKey: "companies",
      autoCreate: true
    }).openConfiguration()
  }

  ngOnInit() {
   this.iAppService.getClient().subscribe((iAppClient) => {
    this.iAppClient = iAppClient
    this.findIntegrations();
  });

}
  }

