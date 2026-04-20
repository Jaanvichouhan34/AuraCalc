import { healthCalculators } from './healthCalculators';
import { financeCalculators } from './financeCalculators';
import { utilityCalculators } from './utilityCalculators';
import { mathCalculators } from './mathCalculators';
import { engineeringCalculators } from './engineeringCalculators';
import { constructionCalculators } from './constructionCalculators';
import { educationCalculators } from './educationCalculators';
import { travelCalculators } from './travelCalculators';
import { techCalculators } from './techCalculators';
import { miscCalculators } from './miscCalculators';

export const allCalculators = [
  ...mathCalculators,
  ...financeCalculators,
  ...healthCalculators,
  ...engineeringCalculators,
  ...constructionCalculators,
  ...educationCalculators,
  ...utilityCalculators,
  ...travelCalculators,
  ...techCalculators,
  ...miscCalculators
];
