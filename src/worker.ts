export interface Env { }

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return await fetch("https://mta-sts.mx.cloudflare.net/.well-known/mta-sts.txt");
	},
};
