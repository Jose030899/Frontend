export class Usuario{
    constructor(
        public mail: string,
        public password: string,
        public nombre?: string,
        public idUsuario?: number,
        public imagen?: string,
        public google?: boolean,
        public activo?: boolean,
        public nativo?: boolean
        ){}
    }