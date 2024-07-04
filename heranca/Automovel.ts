import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre {
    private _cor: string;
    private _numeroPortas: number;
    private _placas: string;
    private _marchas: number;

    constructor(cor: string, numeroPortas: number, placas: string, marchas: number, capacidade: number, numeroRodas: number, velocidade: number) {
        super(capacidade, numeroRodas, velocidade);
        this._cor = cor;
        this._numeroPortas = numeroPortas;
        this._placas = placas;
        this._marchas = marchas;
    }
    public get cor(): string {
        return this._cor;
    }

    public get numeroPortas(): number {
        return this._numeroPortas;
    }

    public get placas(): string {
        return this._placas;
    }

    public get marchas(): number {
        return this._marchas;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public set numeroPortas(value: number) {
        this._numeroPortas = value;
    }

    public set placas(value: string) {
        this._placas = value;
    }

    public set marchas(value: number) {
        this._marchas = value;
    }

    public visualizar()/*: void*/ {
        super.visualizar();
        console.log(`Cor: ${this._cor}`);
        console.log(`Numero de portas: ${this._numeroPortas}`);
        console.log(`Placa: ${this._placas}`);
        console.log(`Numero de marchas: ${this._marchas}`);
    }


}