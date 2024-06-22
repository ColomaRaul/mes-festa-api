export class HealthService {
    async testConnection() {
        return {
            'message': 'all ok'
        }
    }
}