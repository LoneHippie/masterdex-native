export type Move = {
   move: {
      name: string;
      id: number;
      generation_id: number;
      move_damage_class_id: number;
      move_effect_chance?: number;
      move_effect_id: number;
      pp: number;
      power?: number;
      damageClass: {
         name: string;
      };
      type: {
         name: string;
      };
   };
   learnMethod: {
      name: string;
   };
   level: string;
};
