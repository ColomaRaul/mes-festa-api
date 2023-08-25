import { Controller, Get } from "@nestjs/common";

@Controller()
export class OrganizationController {
    constructor() {}

    @Get('/test')
    getOrganization(): string {
        return 'hola desde la organización';
    }
}