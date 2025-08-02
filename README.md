# Hierarchical Relationship Categories

This project provides a comprehensive TypeScript/JavaScript object structure that represents hierarchical categories of relationships for a person, including both personal relationships (family, friends) and business relationships (service providers, professional contacts).

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

## TypeScript Usage

### Basic Usage

```typescript
import { 
  relationshipCategories, 
  getAllRelationships, 
  getRelationshipsByPath,
  Person,
  Relationship
} from './relationship_categories';

// Access specific relationships with type safety
const dentist: string = relationshipCategories.serviceProviders.health.medical.dentist;
const brother: string = relationshipCategories.personal.family.immediate.siblings.brother;

// Get all relationships in a category
const healthProviders = getRelationshipsByPath(relationshipCategories, 'serviceProviders.health');
const familyMembers = getRelationshipsByPath(relationshipCategories, 'personal.family');

// Get all relationships in a flat structure
const allRelationships = getAllRelationships(relationshipCategories);
```

### Creating a Person with Relationships

```typescript
const person: Person = {
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

### Type-Safe Helper Functions

```typescript
import { addRelationship, findRelationshipsByCategory } from './relationship_categories';

// Add a new relationship with type safety
addRelationship(person, "Bob Builder", "serviceProviders.home.contractor", "serviceProviders.home");

// Find relationships by category
const familyMembers = findRelationshipsByCategory(person, 'personal.family');
const serviceProviders = findRelationshipsByCategory(person, 'serviceProviders');
```

## JavaScript Usage

If you prefer to use JavaScript, you can import the compiled JavaScript files:

```javascript
const { relationshipCategories, getAllRelationships, getRelationshipsByPath } = require('./dist/relationship_categories.js');

// Access specific relationships
const dentist = relationshipCategories.serviceProviders.health.medical.dentist;
const brother = relationshipCategories.personal.family.immediate.siblings.brother;
```

## File Structure

- `relationship_categories.ts` - Main TypeScript relationship categories object and helper functions
- `example_usage.ts` - Practical TypeScript examples of how to use the structure
- `tsconfig.json` - TypeScript configuration
- `README.md` - This documentation file

## Building and Running

### TypeScript Development

```bash
# Install TypeScript if not already installed
npm install -g typescript

# Compile TypeScript to JavaScript
tsc

# Run the TypeScript example
npx ts-node example_usage.ts
```

### JavaScript Usage

```bash
# Compile TypeScript to JavaScript
tsc

# Run the JavaScript example
node dist/example_usage.js
```

## Key Features

1. **Type Safety**: Full TypeScript support with interfaces and type checking
2. **Hierarchical Organization**: Relationships are organized in a logical hierarchy
3. **Comprehensive Coverage**: Includes personal, professional, service provider, and community relationships
4. **Flexible Access**: Helper functions allow easy traversal and filtering
5. **Extensible**: Easy to add new categories or relationships
6. **IntelliSense Support**: Full IDE support with autocomplete and type hints

## Type Definitions

The project includes comprehensive TypeScript interfaces:

- `RelationshipCategories` - The main structure interface
- `Person` - Interface for a person with relationships
- `Relationship` - Interface for individual relationships
- `RelationshipCategory` - Generic interface for category traversal

## Adding New Relationships

To add new relationships, simply extend the appropriate category in the `relationshipCategories` object:

```typescript
// Add a new health service provider
relationshipCategories.serviceProviders.health.medical.optometrist = "Optometrist";

// Add a new family relationship
relationshipCategories.personal.family.immediate.siblings.twinBrother = "Twin Brother";
```

The structure is designed to be easily extensible while maintaining type safety and hierarchical organization. 
