# Hierarchical Relationship Categories

This project provides an object structure that represents hierarchical categories of relationships for a person, including both personal relationships (family, friends) and business relationships (service providers, professional contacts).

## Usage

### Basic Usage

```typescript
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

## Adding New Relationships and Categories

The structure is designed to be easily extensible while maintaining type safety and hierarchical organization.

### Adding New Relationships

To add new relationships, simply extend the appropriate category in the `relationshipCategories` object:

```typescript
// Add a new health service provider
relationshipCategories.serviceProviders.health.medical.optometrist = "Optometrist";

// Add a new family relationship
relationshipCategories.personal.family.immediate.siblings.twinBrother = "Twin Brother";

// Add a new professional relationship
relationshipCategories.professional.work.supervisor.manager = "Manager";
```

### Adding New Categories

You can also add entirely new categories and subcategories:

```typescript
// Add a new main category
relationshipCategories.entertainment = {
  media: {
    streaming: {
      netflix: "Netflix",
      hulu: "Hulu",
      disneyPlus: "Disney+"
    },
    gaming: {
      xbox: "Xbox",
      playstation: "PlayStation",
      nintendo: "Nintendo"
    }
  },
  events: {
    concerts: {
      rock: "Rock Concert",
      classical: "Classical Concert",
      jazz: "Jazz Concert"
    },
    sports: {
      basketball: "Basketball Game",
      football: "Football Game",
      baseball: "Baseball Game"
    }
  }
};

// Add a new subcategory to existing categories
relationshipCategories.serviceProviders.technology = {
  software: {
    developer: "Software Developer",
    designer: "UI/UX Designer",
    architect: "Solution Architect"
  },
  hardware: {
    technician: "Computer Technician",
    consultant: "IT Consultant",
    specialist: "Hardware Specialist"
  }
};

// Add relationships to existing categories
relationshipCategories.personal.family.immediate.children.adopted = {
  adoptedSon: "Adopted Son",
  adoptedDaughter: "Adopted Daughter"
};
```

### Type Safety Considerations

When adding new categories, the TypeScript compiler will automatically provide type safety for the new structure. The helper functions (`getAllRelationships`, `getRelationshipsByPath`, `addRelationship`, `findRelationshipsByCategory`) will work with any new categories you add.

### Best Practices

1. **Consistent Naming**: Use camelCase for property names and descriptive names for relationship values
2. **Hierarchical Organization**: Group related relationships into logical subcategories
3. **Descriptive Values**: Use clear, human-readable relationship names
4. **Extensible Structure**: Design categories to accommodate future additions

### Example: Complete New Category Addition

```typescript
// Add a comprehensive new category
relationshipCategories.travel = {
  transportation: {
    air: {
      pilot: "Pilot",
      flightAttendant: "Flight Attendant",
      airTrafficController: "Air Traffic Controller"
    },
    ground: {
      taxiDriver: "Taxi Driver",
      busDriver: "Bus Driver",
      trainConductor: "Train Conductor"
    },
    water: {
      captain: "Ship Captain",
      crewMember: "Crew Member",
      harborMaster: "Harbor Master"
    }
  },
  accommodation: {
    hotels: {
      concierge: "Hotel Concierge",
      housekeeper: "Housekeeper",
      bellhop: "Bellhop"
    },
    rentals: {
      host: "Rental Host",
      propertyManager: "Property Manager",
      cleaner: "Cleaning Service"
    }
  }
};

// Now you can use it with the helper functions
addRelationship(person, "Captain Smith", "travel.transportation.water.captain");
const travelContacts = findRelationshipsByCategory(person, 'travel');
``` 
