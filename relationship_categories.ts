// Type definitions for relationship categories
export interface RelationshipCategory {
  [key: string]: string | RelationshipCategory;
}

export interface RelationshipCategories {
  personal: {
    family: {
      immediate: {
        spouse: {
          husband: string;
          wife: string;
          partner: string;
        };
        children: {
          son: string;
          daughter: string;
          stepson: string;
          stepdaughter: string;
        };
        parents: {
          father: string;
          mother: string;
          stepfather: string;
          stepmother: string;
        };
        siblings: {
          brother: string;
          sister: string;
          halfBrother: string;
          halfSister: string;
          stepBrother: string;
          stepSister: string;
        };
      };
      extended: {
        grandparents: {
          grandfather: string;
          grandmother: string;
          maternalGrandfather: string;
          maternalGrandmother: string;
          paternalGrandfather: string;
          paternalGrandmother: string;
        };
        auntsUncles: {
          aunt: string;
          uncle: string;
          maternalAunt: string;
          maternalUncle: string;
          paternalAunt: string;
          paternalUncle: string;
        };
        cousins: {
          cousin: string;
          firstCousin: string;
          secondCousin: string;
        };
        inLaws: {
          fatherInLaw: string;
          motherInLaw: string;
          brotherInLaw: string;
          sisterInLaw: string;
        };
      };
    };
    friends: {
      close: {
        bestFriend: string;
        closeFriend: string;
      };
      social: {
        friend: string;
        acquaintance: string;
        neighbor: string;
        colleague: string;
      };
    };
  };
  professional: {
    work: {
      supervisor: {
        manager: string;
        director: string;
        ceo: string;
        supervisor: string;
      };
      subordinate: {
        employee: string;
        intern: string;
        assistant: string;
      };
      peer: {
        coworker: string;
        colleague: string;
        teammate: string;
      };
    };
    business: {
      client: {
        customer: string;
        client: string;
        account: string;
      };
      partner: {
        businessPartner: string;
        investor: string;
        shareholder: string;
      };
      vendor: {
        supplier: string;
        vendor: string;
        contractor: string;
      };
    };
  };
  serviceProviders: {
    health: {
      medical: {
        doctor: string;
        dentist: string;
        specialist: string;
        therapist: string;
        psychiatrist: string;
        psychologist: string;
      };
      wellness: {
        personalTrainer: string;
        nutritionist: string;
        massageTherapist: string;
        chiropractor: string;
      };
    };
    legal: {
      lawyer: string;
      attorney: string;
      paralegal: string;
      notary: string;
    };
    financial: {
      accountant: string;
      financialAdvisor: string;
      taxPreparer: string;
      insuranceAgent: string;
      banker: string;
    };
    home: {
      realtor: string;
      contractor: string;
      plumber: string;
      electrician: string;
      landscaper: string;
      housekeeper: string;
    };
    education: {
      teacher: string;
      professor: string;
      tutor: string;
      mentor: string;
      coach: string;
    };
    personal: {
      hairdresser: string;
      stylist: string;
      tailor: string;
      photographer: string;
      personalAssistant: string;
    };
  };
  community: {
    religious: {
      pastor: string;
      priest: string;
      rabbi: string;
      imam: string;
      congregationMember: string;
    };
    civic: {
      electedOfficial: string;
      communityLeader: string;
      volunteer: string;
      activist: string;
    };
    social: {
      clubMember: string;
      organizationMember: string;
      alumni: string;
    };
  };
}

// Person and relationship interfaces
export interface Relationship {
  personName: string;
  relationship: string;
  category: string;
}

export interface Person {
  name: string;
  relationships: Relationship[];
}

// The main relationship categories object
export const relationshipCategories: RelationshipCategories = {
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
export function findRelationshipsByCategory(person: Person, categoryPath: string): Relationship[] {
  return person.relationships.filter(rel => rel.category.startsWith(categoryPath));
} 
