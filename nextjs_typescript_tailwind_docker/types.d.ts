type Cell = 0 | 1 | 2;
type GoBoard = {
    size: [number, number],
    board: Cell[][]
}

type StoredData = {
    player_id: string
    player_name: string
    board: string
}

type NotificationProps = {
    player_1: string
    player_2: string
}

type BoardResponse = {
    response: string
    notification: string | null,
    player_one_id:string
    player_two_id: string
    player_one_name: string
    player_two_name: string
    score: [number, number]
    finished: boolean
}

type ScoreBoard = {
    players: string[]
    score: [number, number];
    finished: boolean;
    winner: string | null;
};
