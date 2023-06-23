
interface Entrie{
    id: number;
    date: string;
    text: string,
    picture: string | null;
}

export interface State{
    isLoading: boolean;
    entries: Entrie[];
    
}