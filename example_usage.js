// Example usage of the relationship categories
const { relationshipCategories, getAllRelationships, getRelationshipsByPath } = require('./relationship_categories.js');

// Example 1: Adding a person with multiple relationships
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

// Example 5: Function to add a new relationship
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

// Example 6: Function to find relationships by category
function findRelationshipsByCategory(person, categoryPath) {
  return person.relationships.filter(rel => rel.category.startsWith(categoryPath));
}

// Example 7: Adding a new relationship
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
