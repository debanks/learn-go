type pieceStates = 'alive' | 'dead' | 'captured';
type colors = 'white' | 'black';

export interface ICoordinates {
    x: number,
    y: number
}

class Stone {
    public color: colors;
    public state: pieceStates;
    public coordinates: ICoordinates;
    public transparent: Boolean;
    
    constructor(color: colors, coordinates: ICoordinates, transparent = false) {
        this.color = color;
        this.coordinates = coordinates;
        this.state = 'alive';
        this.transparent = transparent;
    }
}

export default Stone;