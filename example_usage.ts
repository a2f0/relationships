// Example usage of the relationship categories
import { 
  relationshipCategories, 
  getAllRelationships, 
  getRelationshipsByPath,
  addRelationship,
  findRelationshipsByCategory,
  Person
} from './relationship_categories';

// Example 1: Adding a person with multiple relationships
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
    },
    {
      personName: "Mike Johnson",
      relationship: relationshipCategories.personal.family.immediate.siblings.brother,
      category: "personal.family.immediate.siblings"
    },
    {
      personName: "Sarah Wilson",
      relationship: relationshipCategories.professional.work.peer.coworker,
      category: "professional.work.peer"
    }
  ]
};

// Example 2: Finding all health service providers
const healthProviders = getRelationshipsByPath(relationshipCategories, 'serviceProviders.health');
console.log('Health Service Providers:');
console.log(healthProviders);

// Example 3: Finding all family relationships
const familyRelationships = getRelationshipsByPath(relationshipCategories, 'personal.family');
console.log('\nFamily Relationships:');
console.log(familyRelationships);

// Example 4: Getting all relationships in a flat structure
const allRelationships = getAllRelationships(relationshipCategories);
console.log('\nAll available relationships (first 10):');
console.log(Object.entries(allRelationships).slice(0, 10));

// Example 5: Adding a new relationship using the helper function
addRelationship(person, "Bob Builder", "serviceProviders.home.contractor", "serviceProviders.home");

console.log('\nJohn\'s relationships:');
person.relationships.forEach(rel => {
  console.log(`${rel.personName}: ${rel.relationship}`);
});

console.log('\nJohn\'s family members:');
const familyMembers = findRelationshipsByCategory(person, 'personal.family');
familyMembers.forEach(rel => {
  console.log(`${rel.personName}: ${rel.relationship}`);
});

console.log('\nJohn\'s service providers:');
const serviceProviders = findRelationshipsByCategory(person, 'serviceProviders');
serviceProviders.forEach(rel => {
  console.log(`${rel.personName}: ${rel.relationship}`);
});

// Example 6: Type-safe relationship access
const dentistRelationship: string = relationshipCategories.serviceProviders.health.medical.dentist;
const brotherRelationship: string = relationshipCategories.personal.family.immediate.siblings.brother;

console.log('\nType-safe relationship access:');
console.log(`Dentist relationship: ${dentistRelationship}`);
console.log(`Brother relationship: ${brotherRelationship}`);

// Example 7: Creating a new person with type safety
const createPerson = (name: string): Person => ({
  name,
  relationships: []
});

const newPerson = createPerson("Alice Smith");
addRelationship(newPerson, "Dr. Johnson", "serviceProviders.health.medical.doctor", "serviceProviders.health.medical");
addRelationship(newPerson, "Tom Smith", "personal.family.immediate.siblings.brother", "personal.family.immediate.siblings");

console.log('\nNew person created:');
console.log(`${newPerson.name}'s relationships:`);
newPerson.relationships.forEach(rel => {
  console.log(`${rel.personName}: ${rel.relationship}`);
}); 
