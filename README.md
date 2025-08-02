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
import { addRelationship, findRelationshipsByCategory } from './util/relationship';

// Add a new relationship with type safety (category is automatically derived from path)
addRelationship(person, "Bob Builder", "serviceProviders.home.contractor");

// Find relationships by category
const familyMembers = findRelationshipsByCategory(person, 'personal.family');
const serviceProviders = findRelationshipsByCategory(person, 'serviceProviders');
```

## Building and Running

### TypeScript Development

```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Run the TypeScript example with tsx
npm run dev

# Run the executable TypeScript file directly
./example_usage.ts

# Run tests
npm test
```

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Type checking
npm run type-check
```


## Testing

Run tests with:
```bash
npm test        # Watch mode
npm run test:run # Run once
```

## Adding New Relationships

To add new relationships, simply extend the appropriate category in the `relationshipCategories` object:

```typescript
// Add a new health service provider
relationshipCategories.serviceProviders.health.medical.optometrist = "Optometrist";

// Add a new family relationship
relationshipCategories.personal.family.immediate.siblings.twinBrother = "Twin Brother";
```

The structure is designed to be easily extensible while maintaining type safety and hierarchical organization. 
