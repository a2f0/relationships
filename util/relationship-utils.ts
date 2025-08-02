import { relationshipCategories, type Person } from '../relationship_categories';

// Helper function to get all relationships in a flat structure
export function getAllRelationships(categories: any, prefix: string = ''): Record<string, string> {
  const relationships: Record<string, string> = {};
  
  function traverse(obj: any, currentPrefix: string): void {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        // This is a relationship
        const fullPath = currentPrefix ? `${currentPrefix}.${key}` : key;
        relationships[fullPath] = value;
      } else if (typeof value === 'object') {
        // This is a category, continue traversing
        const newPrefix = currentPrefix ? `${currentPrefix}.${key}` : key;
        traverse(value, newPrefix);
      }
    }
  }
  
  traverse(categories, prefix);
  return relationships;
}

// Helper function to get relationships by category path
export function getRelationshipsByPath(categories: any, path: string): any {
  const pathParts = path.split('.');
  let current: any = categories;
  
  for (const part of pathParts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      return null;
    }
  }
  
  return current;
}

// Type-safe function to add a new relationship
export function addRelationship(person: Person, newPersonName: string, relationshipPath: string, categoryPath: string): boolean {
  const relationship = getRelationshipsByPath(relationshipCategories, relationshipPath);
  if (relationship && typeof relationship === 'string') {
    person.relationships.push({
      personName: newPersonName,
      relationship: relationship,
      category: categoryPath
    });
    return true;
  }
  return false;
}

// Type-safe function to find relationships by category
export function findRelationshipsByCategory(person: Person, categoryPath: string): any[] {
  return person.relationships.filter(rel => rel.category.startsWith(categoryPath));
} 
