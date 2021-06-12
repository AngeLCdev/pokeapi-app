
export function useGameIndice({ game_indices }) {
    let result = '';
  
    if (game_indices.length > 0) {
      result = game_indices.pop()
      result = result.game_index
    }
    
    return { result };
  }
  