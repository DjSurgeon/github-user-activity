const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

export function formatData(activities) {
	if (!activities || activities.length == 0) {
		return ('No se encontro actividad reciente.');
	}
	return activities.map(activity => {
		let response;
		const type = activity.type;
		const name = activity.repo.name;
		const description = activity.payload.description;
		const commits = activity.payload.commits;
		const date = new Date(activity.created_at).toLocaleDateString();
		const refType = activity.payload.ref_type;
		const issueAction = activity.payload.action;

		switch (type) {
			case 'CreateEvent':
				if (refType == 'repository') {
					response = `${colors.blue}[${date}]${colors.reset} - ${colors.green}Se creo el repositorio ${name} con la descripción ${description}${colors.reset}`;
				}
				else if (refType == 'branch') {
					response = `${colors.blue}[${date}]${colors.reset} - ${colors.green}Se creo la rama main en el repositorio ${name}${colors.reset}`
				}
				break;
			case 'PushEvent':
				response = `${colors.blue}[${date}]${colors.reset} - ${colors.cyan}Se realizaron ${commits.length} commit(s) en ${name}${colors.reset}`;
				break;
			case 'IssuesEvent':
				response = `${colors.blue}[${date}]${colors.reset} - ${colors.magenta}${issueAction == 'opened' ? 'Abrió' : 'Cerró'} un issue en ${name}${colors.reset}`;
				break;
			case 'WatchEvent':
				response = `${colors.blue}[${date}]${colors.reset} - ${colors.yellow}Puso estrella en ${name}${colors.reset}`;
				break;
			case 'ForkEvent':
				response = `${colors.blue}[${date}]${colors.reset} - ${colors.blue}Hizo fork en el repo ${name}${colors.reset}`;
				break;
			default:
				response = `${colors.blue}[${date}]${colors.reset} - ${colors.red}Evento ${type} en ${name}${colors.reset}`;
			}
		return console.log(response);
	}).join('\n');
}