import type {ICoordinates} from './Stone';

type pieceStates = 'alive' | 'dead' | 'captured';
type IconTypes = 'x' | 'o' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';

class Icon {
    public icon: IconTypes;
    public coordinates: ICoordinates;
    public transparent: Boolean;
    public color: String;
    
    constructor(icon: IconTypes, color: string, coordinates: ICoordinates, transparent = false) {
        this.icon = icon;
        this.color = color;
        this.coordinates = coordinates;
        this.transparent = transparent;
    }
}

export default Icon;