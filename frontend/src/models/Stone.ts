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
    
    constructor(color: colors, coordinates: ICoordinates) {
        this.color = color;
        this.coordinates = coordinates;
        this.state = 'alive';
    }
}

export default Stone;