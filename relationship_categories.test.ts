import { describe, it, expect, beforeEach } from 'vitest';
import { 
  relationshipCategories, 
  Person
} from './relationship_categories';
import {
  getAllRelationships, 
  getRelationshipsByPath,
  addRelationship,
  findRelationshipsByCategory
} from './util/relationship';

describe('Relationship Categories', () => {
  let person: Person;

  beforeEach(() => {
    person = {
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
  });

  describe('relationshipCategories object', () => {
    it('should have the correct structure for personal relationships', () => {
      expect(relationshipCategories.personal).toBeDefined();
      expect(relationshipCategories.personal.family).toBeDefined();
      expect(relationshipCategories.personal.family.immediate).toBeDefined();
      expect(relationshipCategories.personal.family.extended).toBeDefined();
      expect(relationshipCategories.personal.friends).toBeDefined();
    });

    it('should have the correct structure for professional relationships', () => {
      expect(relationshipCategories.professional).toBeDefined();
      expect(relationshipCategories.professional.work).toBeDefined();
      expect(relationshipCategories.professional.business).toBeDefined();
    });

    it('should have the correct structure for service providers', () => {
      expect(relationshipCategories.serviceProviders).toBeDefined();
      expect(relationshipCategories.serviceProviders.health).toBeDefined();
      expect(relationshipCategories.serviceProviders.legal).toBeDefined();
      expect(relationshipCategories.serviceProviders.financial).toBeDefined();
      expect(relationshipCategories.serviceProviders.home).toBeDefined();
      expect(relationshipCategories.serviceProviders.education).toBeDefined();
      expect(relationshipCategories.serviceProviders.personal).toBeDefined();
    });

    it('should have the correct structure for community relationships', () => {
      expect(relationshipCategories.community).toBeDefined();
      expect(relationshipCategories.community.religious).toBeDefined();
      expect(relationshipCategories.community.civic).toBeDefined();
      expect(relationshipCategories.community.social).toBeDefined();
    });

    it('should have specific relationship values', () => {
      expect(relationshipCategories.personal.family.immediate.spouse.wife).toBe("Wife");
      expect(relationshipCategories.personal.family.immediate.siblings.brother).toBe("Brother");
      expect(relationshipCategories.serviceProviders.health.medical.dentist).toBe("Dentist");
      expect(relationshipCategories.professional.work.peer.coworker).toBe("Coworker");
    });
  });

  describe('getAllRelationships', () => {
    it('should return all relationships in a flat structure', () => {
      const allRelationships = getAllRelationships(relationshipCategories);
      
      expect(allRelationships).toBeDefined();
      expect(typeof allRelationships).toBe('object');
      expect(Object.keys(allRelationships).length).toBeGreaterThan(0);
      
      // Check for specific relationships
      expect(allRelationships['personal.family.immediate.spouse.wife']).toBe("Wife");
      expect(allRelationships['personal.family.immediate.siblings.brother']).toBe("Brother");
      expect(allRelationships['serviceProviders.health.medical.dentist']).toBe("Dentist");
    });

    it('should return relationships with correct path format', () => {
      const allRelationships = getAllRelationships(relationshipCategories);
      
      // Check that paths are properly formatted
      const wifePath = 'personal.family.immediate.spouse.wife';
      const brotherPath = 'personal.family.immediate.siblings.brother';
      const dentistPath = 'serviceProviders.health.medical.dentist';
      
      expect(allRelationships[wifePath]).toBe("Wife");
      expect(allRelationships[brotherPath]).toBe("Brother");
      expect(allRelationships[dentistPath]).toBe("Dentist");
    });
  });

  describe('getRelationshipsByPath', () => {
    it('should return health service providers', () => {
      const healthProviders = getRelationshipsByPath(relationshipCategories, 'serviceProviders.health');
      
      expect(healthProviders).toBeDefined();
      expect(healthProviders.medical).toBeDefined();
      expect(healthProviders.wellness).toBeDefined();
      expect(healthProviders.medical.doctor).toBe("Doctor");
      expect(healthProviders.medical.dentist).toBe("Dentist");
      expect(healthProviders.wellness.personalTrainer).toBe("Personal Trainer");
    });

    it('should return family relationships', () => {
      const familyRelationships = getRelationshipsByPath(relationshipCategories, 'personal.family');
      
      expect(familyRelationships).toBeDefined();
      expect(familyRelationships.immediate).toBeDefined();
      expect(familyRelationships.extended).toBeDefined();
      expect(familyRelationships.immediate.spouse).toBeDefined();
      expect(familyRelationships.immediate.siblings).toBeDefined();
    });

    it('should return null for invalid path', () => {
      const invalidPath = getRelationshipsByPath(relationshipCategories, 'invalid.path');
      expect(invalidPath).toBeNull();
    });

    it('should return specific relationship categories', () => {
      const medicalProviders = getRelationshipsByPath(relationshipCategories, 'serviceProviders.health.medical');
      expect(medicalProviders).toBeDefined();
      expect(medicalProviders.doctor).toBe("Doctor");
      expect(medicalProviders.dentist).toBe("Dentist");
      expect(medicalProviders.therapist).toBe("Therapist");
    });
  });

  describe('addRelationship', () => {
    it('should add a new relationship successfully', () => {
      const initialCount = person.relationships.length;
      const success = addRelationship(person, "Bob Builder", "serviceProviders.home.contractor", "serviceProviders.home");
      
      expect(success).toBe(true);
      expect(person.relationships.length).toBe(initialCount + 1);
      
      const newRelationship = person.relationships[person.relationships.length - 1];
      expect(newRelationship).toBeDefined();
      if (newRelationship) {
        expect(newRelationship.personName).toBe("Bob Builder");
        expect(newRelationship.relationship).toBe("Contractor");
        expect(newRelationship.category).toBe("serviceProviders.home");
      }
    });

    it('should return false for invalid relationship path', () => {
      const initialCount = person.relationships.length;
      const success = addRelationship(person, "Invalid Person", "invalid.path", "invalid.category");
      
      expect(success).toBe(false);
      expect(person.relationships.length).toBe(initialCount);
    });

    it('should add multiple relationships', () => {
      const initialCount = person.relationships.length;
      
      addRelationship(person, "Dr. Johnson", "serviceProviders.health.medical.doctor", "serviceProviders.health.medical");
      addRelationship(person, "Tom Smith", "personal.family.immediate.siblings.brother", "personal.family.immediate.siblings");
      
      expect(person.relationships.length).toBe(initialCount + 2);
      
      const doctorRelationship = person.relationships.find(r => r.personName === "Dr. Johnson");
      const brotherRelationship = person.relationships.find(r => r.personName === "Tom Smith");
      
      expect(doctorRelationship).toBeDefined();
      if (doctorRelationship) {
        expect(doctorRelationship.relationship).toBe("Doctor");
      }
      expect(brotherRelationship).toBeDefined();
      if (brotherRelationship) {
        expect(brotherRelationship.relationship).toBe("Brother");
      }
    });
  });

  describe('findRelationshipsByCategory', () => {
    it('should find family relationships', () => {
      const familyMembers = findRelationshipsByCategory(person, 'personal.family');
      
      expect(familyMembers).toBeDefined();
      expect(familyMembers.length).toBe(2);
      
      const familyNames = familyMembers.map(r => r.personName);
      expect(familyNames).toContain("Jane Doe");
      expect(familyNames).toContain("Mike Johnson");
      
      const familyRelationships = familyMembers.map(r => r.relationship);
      expect(familyRelationships).toContain("Wife");
      expect(familyRelationships).toContain("Brother");
    });

    it('should find service provider relationships', () => {
      const serviceProviders = findRelationshipsByCategory(person, 'serviceProviders');
      
      expect(serviceProviders).toBeDefined();
      expect(serviceProviders.length).toBe(1);
      
      const serviceProvider = serviceProviders[0];
      expect(serviceProvider).toBeDefined();
      if (serviceProvider) {
        expect(serviceProvider.personName).toBe("Dr. Smith");
        expect(serviceProvider.relationship).toBe("Dentist");
      }
    });

    it('should find professional relationships', () => {
      const professionalRelations = findRelationshipsByCategory(person, 'professional');
      
      expect(professionalRelations).toBeDefined();
      expect(professionalRelations.length).toBe(1);
      
      const professional = professionalRelations[0];
      expect(professional).toBeDefined();
      if (professional) {
        expect(professional.personName).toBe("Sarah Wilson");
        expect(professional.relationship).toBe("Coworker");
      }
    });

    it('should return empty array for non-existent category', () => {
      const nonExistent = findRelationshipsByCategory(person, 'non.existent.category');
      expect(nonExistent).toEqual([]);
    });
  });

  describe('Type-safe relationship access', () => {
    it('should provide type-safe access to relationships', () => {
      const dentistRelationship: string = relationshipCategories.serviceProviders.health.medical.dentist;
      const brotherRelationship: string = relationshipCategories.personal.family.immediate.siblings.brother;
      
      expect(dentistRelationship).toBe("Dentist");
      expect(brotherRelationship).toBe("Brother");
    });

    it('should allow creating new persons with type safety', () => {
      const createPerson = (name: string): Person => ({
        name,
        relationships: []
      });

      const newPerson = createPerson("Alice Smith");
      
      expect(newPerson.name).toBe("Alice Smith");
      expect(newPerson.relationships).toEqual([]);
      expect(newPerson.relationships.length).toBe(0);
    });
  });

  describe('Person object structure', () => {
    it('should have correct person structure', () => {
      expect(person.name).toBe("John Doe");
      expect(Array.isArray(person.relationships)).toBe(true);
      expect(person.relationships.length).toBe(4);
    });

    it('should have correct relationship structure', () => {
      const relationship = person.relationships[0];
      expect(relationship).toBeDefined();
      
      if (relationship) {
        expect(relationship).toHaveProperty('personName');
        expect(relationship).toHaveProperty('relationship');
        expect(relationship).toHaveProperty('category');
        expect(typeof relationship.personName).toBe('string');
        expect(typeof relationship.relationship).toBe('string');
        expect(typeof relationship.category).toBe('string');
      }
    });

    it('should contain expected relationships', () => {
      const personNames = person.relationships.map(r => r.personName);
      const relationships = person.relationships.map(r => r.relationship);
      
      expect(personNames).toContain("Jane Doe");
      expect(personNames).toContain("Dr. Smith");
      expect(personNames).toContain("Mike Johnson");
      expect(personNames).toContain("Sarah Wilson");
      
      expect(relationships).toContain("Wife");
      expect(relationships).toContain("Dentist");
      expect(relationships).toContain("Brother");
      expect(relationships).toContain("Coworker");
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle empty person relationships', () => {
      const emptyPerson: Person = {
        name: "Empty Person",
        relationships: []
      };
      
      const familyMembers = findRelationshipsByCategory(emptyPerson, 'personal.family');
      expect(familyMembers).toEqual([]);
    });

    it('should handle deep nested paths', () => {
      const deepPath = getRelationshipsByPath(relationshipCategories, 'personal.family.immediate.siblings');
      expect(deepPath).toBeDefined();
      if (deepPath) {
        expect(deepPath.brother).toBe("Brother");
        expect(deepPath.sister).toBe("Sister");
      }
    });

    it('should handle partial category matches', () => {
      const healthRelated = findRelationshipsByCategory(person, 'serviceProviders.health');
      expect(healthRelated.length).toBe(1);
      const healthProvider = healthRelated[0];
      if (healthProvider) {
        expect(healthProvider.personName).toBe("Dr. Smith");
      }
    });
  });
}); 
