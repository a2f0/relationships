# Hierarchical Relationship Categories

This project provides a comprehensive JavaScript object structure that represents hierarchical categories of relationships for a person, including both personal relationships (family, friends) and business relationships (service providers, professional contacts).

## Structure Overview

The relationship categories are organized into four main areas:

### 1. Personal Relationships
- **Family**: Immediate family (spouse, children, parents, siblings) and extended family (grandparents, aunts/uncles, cousins, in-laws)
- **Friends**: Close friends and social acquaintances

### 2. Professional Relationships
- **Work**: Supervisors, subordinates, and peers
- **Business**: Clients, partners, and vendors

### 3. Service Providers
- **Health**: Medical professionals (doctors, dentists, therapists) and wellness providers
- **Legal**: Lawyers, attorneys, paralegals
- **Financial**: Accountants, financial advisors, bankers
- **Home**: Realtors, contractors, maintenance workers
- **Education**: Teachers, professors, tutors
- **Personal**: Stylists, photographers, personal assistants

### 4. Community
- **Religious**: Pastors, priests, congregation members
- **Civic**: Elected officials, community leaders
- **Social**: Club members, alumni

## Usage Examples

### Basic Usage

```javascript
const { relationshipCategories, getAllRelationships, getRelationshipsByPath } = require('./relationship_categories.js');

// Access specific relationships
const dentist = relationshipCategories.serviceProviders.health.medical.dentist;
const brother = relationshipCategories.personal.family.immediate.siblings.brother;

// Get all relationships in a category
const healthProviders = getRelationshipsByPath(relationshipCategories, 'serviceProviders.health');
const familyMembers = getRelationshipsByPath(relationshipCategories, 'personal.family');

// Get all relationships in a flat structure
const allRelationships = getAllRelationships(relationshipCategories);
```

### Creating a Person with Relationships

```javascript
const person = {
  name: "John Doe",
  relationships: [
    {
      personName: "Jane Doe",
      relationship: relationshipCategories.personal.family.immediate.spouse.wife,
      category: "personal.family.immediate.spouse"
    },
    {
      personName: "Dr. Smith",
      relationship: relationshipCategories.serviceProviders.health.medical.dentist,
      category: "serviceProviders.health.medical"
    }
  ]
};
```

### Helper Functions

```javascript
// Add a new relationship
function addRelationship(person, newPersonName, relationshipPath, categoryPath) {
  const relationship = getRelationshipsByPath(relationshipCategories, relationshipPath);
  if (relationship) {
    person.relationships.push({
      personName: newPersonName,
      relationship: relationship,
      category: categoryPath
    });
    return true;
  }
  return false;
}

// Find relationships by category
function findRelationshipsByCategory(person, categoryPath) {
  return person.relationships.filter(rel => rel.category.startsWith(categoryPath));
}
```

## File Structure

- `relationship_categories.js` - Main relationship categories object and helper functions
- `example_usage.js` - Practical examples of how to use the structure
- `README.md` - This documentation file

## Running the Examples

```bash
node example_usage.js
```

This will demonstrate various ways to use the relationship categories structure.

## Key Features

1. **Hierarchical Organization**: Relationships are organized in a logical hierarchy
2. **Comprehensive Coverage**: Includes personal, professional, service provider, and community relationships
3. **Flexible Access**: Helper functions allow easy traversal and filtering
4. **Extensible**: Easy to add new categories or relationships
5. **Type Safety**: Clear structure makes it easy to validate relationship types

## Adding New Relationships

To add new relationships, simply extend the appropriate category in the `relationshipCategories` object:

```javascript
relationshipCategories.serviceProviders.health.medical.optometrist = "Optometrist";
```

The structure is designed to be easily extensible while maintaining the hierarchical organization. 
