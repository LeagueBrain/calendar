import { Options } from './options';
import { State } from './state';

export interface Parsers {
	[parser: string]: (input: any) => any;
}

export interface Plugin {
	createOptions?: (options: Partial<Options>) => void;
	createParsers?: (parsers: Parsers, options: Partial<Options>) => void;
	createStores?: (state: Partial<State>) => void;
}
