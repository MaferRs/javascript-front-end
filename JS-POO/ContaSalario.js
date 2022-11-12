import { Conta } from "./Conta"

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, this, cliente, 100);
    }
}