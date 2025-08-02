const relationshipCategories = {
  personal: {
    family: {
      immediate: {
        spouse: {
          husband: "Husband",
          wife: "Wife",
          partner: "Partner"
        },
        children: {
          son: "Son",
          daughter: "Daughter",
          stepson: "Step-son",
          stepdaughter: "Step-daughter"
        },
        parents: {
          father: "Father",
          mother: "Mother",
          stepfather: "Step-father",
          stepmother: "Step-mother"
        },
        siblings: {
          brother: "Brother",
          sister: "Sister",
          halfBrother: "Half-brother",
          halfSister: "Half-sister",
          stepBrother: "Step-brother",
          stepSister: "Step-sister"
        }
      },
      extended: {
        grandparents: {
          grandfather: "Grandfather",
          grandmother: "Grandmother",
          maternalGrandfather: "Maternal Grandfather",
          maternalGrandmother: "Maternal Grandmother",
          paternalGrandfather: "Paternal Grandfather",
          paternalGrandmother: "Paternal Grandmother"
        },
        auntsUncles: {
          aunt: "Aunt",
          uncle: "Uncle",
          maternalAunt: "Maternal Aunt",
          maternalUncle: "Maternal Uncle",
          paternalAunt: "Paternal Aunt",
          paternalUncle: "Paternal Uncle"
        },
        cousins: {
          cousin: "Cousin",
          firstCousin: "First Cousin",
          secondCousin: "Second Cousin"
        },
        inLaws: {
          fatherInLaw: "Father-in-law",
          motherInLaw: "Mother-in-law",
          brotherInLaw: "Brother-in-law",
          sisterInLaw: "Sister-in-law"
        }
      }
    },
    friends: {
      close: {
        bestFriend: "Best Friend",
        closeFriend: "Close Friend"
      },
      social: {
        friend: "Friend",
        acquaintance: "Acquaintance",
        neighbor: "Neighbor",
        colleague: "Colleague"
      }
    }
  },
  professional: {
    work: {
      supervisor: {
        manager: "Manager",
        director: "Director",
        ceo: "CEO",
        supervisor: "Supervisor"
      },
      subordinate: {
        employee: "Employee",
        intern: "Intern",
        assistant: "Assistant"
      },
      peer: {
        coworker: "Coworker",
        colleague: "Colleague",
        teammate: "Teammate"
      }
    },
    business: {
      client: {
        customer: "Customer",
        client: "Client",
        account: "Account"
      },
      partner: {
        businessPartner: "Business Partner",
        investor: "Investor",
        shareholder: "Shareholder"
      },
      vendor: {
        supplier: "Supplier",
        vendor: "Vendor",
        contractor: "Contractor"
      }
    }
  },
  serviceProviders: {
    health: {
      medical: {
        doctor: "Doctor",
        dentist: "Dentist",
        specialist: "Medical Specialist",
        therapist: "Therapist",
        psychiatrist: "Psychiatrist",
        psychologist: "Psychologist"
      },
      wellness: {
        personalTrainer: "Personal Trainer",
        nutritionist: "Nutritionist",
        massageTherapist: "Massage Therapist",
        chiropractor: "Chiropractor"
      }
    },
    legal: {
      lawyer: "Lawyer",
      attorney: "Attorney",
      paralegal: "Paralegal",
      notary: "Notary"
    },
    financial: {
      accountant: "Accountant",
      financialAdvisor: "Financial Advisor",
      taxPreparer: "Tax Preparer",
      insuranceAgent: "Insurance Agent",
      banker: "Banker"
    },
    home: {
      realtor: "Realtor",
      contractor: "Contractor",
      plumber: "Plumber",
      electrician: "Electrician",
      landscaper: "Landscaper",
      housekeeper: "Housekeeper"
    },
    education: {
      teacher: "Teacher",
      professor: "Professor",
      tutor: "Tutor",
      mentor: "Mentor",
      coach: "Coach"
    },
    personal: {
      hairdresser: "Hairdresser",
      stylist: "Stylist",
      tailor: "Tailor",
      photographer: "Photographer",
      personalAssistant: "Personal Assistant"
    }
  },
  community: {
    religious: {
      pastor: "Pastor",
      priest: "Priest",
      rabbi: "Rabbi",
      imam: "Imam",
      congregationMember: "Congregation Member"
    },
    civic: {
      electedOfficial: "Elected Official",
      communityLeader: "Community Leader",
      volunteer: "Volunteer",
      activist: "Activist"
    },
    social: {
      clubMember: "Club Member",
      organizationMember: "Organization Member",
      alumni: "Alumni"
    }
  }
};

// Helper function to get all relationships in a flat structure
function getAllRelationships(categories, prefix = '') {
  const relationships = {};
  
  function traverse(obj, currentPrefix) {
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
function getRelationshipsByPath(categories, path) {
  const pathParts = path.split('.');
  let current = categories;
  
  for (const part of pathParts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      return null;
    }
  }
  
  return current;
}

// Example usage:
console.log('All relationships:');
console.log(getAllRelationships(relationshipCategories));

console.log('\nFamily relationships:');
console.log(getRelationshipsByPath(relationshipCategories, 'personal.family'));

console.log('\nHealth service providers:');
console.log(getRelationshipsByPath(relationshipCategories, 'serviceProviders.health'));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    relationshipCategories,
    getAllRelationships,
    getRelationshipsByPath
  };
} 
