// Surveys Management

const surveys = {
    students: {
        name: 'الطلاب',
        icon: '🎓',
        questions: [
            'كيف تقيم المناهج الدراسية؟',
            'هل تشعر بالأمان في المدرسة؟',
            'كيف تقيم جودة التدريس؟'
        ]
    },
    teachers: {
        name: 'المعلمين',
        icon: '👨‍🏫',
        questions: [
            'هل لديك الموارد الكافية للتدريس؟',
            'كيف تقيم بيئة العمل؟',
            'هل تشعر بالدعم الإداري؟'
        ]
    },
    parents: {
        name: 'أولياء الأمور',
        icon: '👨‍👩‍👧',
        questions: [
            'كيف تقيم مستوى التواصل مع المدرسة؟',
            'هل تشعر بتحسن في أداء طفلك؟',
            'كيف تقيم الأنشطة والبرامج؟'
        ]
    },
    admin: {
        name: 'الإداريين',
        icon: '💼',
        questions: [
            'هل الموارد المالية كافية؟',
            'كيف تقيم العلاقات بين الإدارات؟',
            'ما مدى فعالية الأنظمة الإدارية؟'
        ]
    }
};

// Survey Response Storage
let surveyResponses = [];

// Add survey response
function addSurveyResponse(response) {
    surveyResponses.push(response);
    saveSurveyResponses();
}

// Save responses to localStorage
function saveSurveyResponses() {
    localStorage.setItem('surveyResponses', JSON.stringify(surveyResponses));
}

// Load responses from localStorage
function loadSurveyResponses() {
    const saved = localStorage.getItem('surveyResponses');
    if (saved) {
        surveyResponses = JSON.parse(saved);
    }
}

// Get survey statistics
function getSurveyStats(type) {
    const typeSurveys = surveyResponses.filter(r => r.type === type);
    
    if (typeSurveys.length === 0) {
        return null;
    }
    
    const total = typeSurveys.length;
    const avgSatisfaction = typeSurveys.reduce((sum, r) => sum + parseInt(r.satisfaction), 0) / total;
    
    return {
        total,
        avgSatisfaction: Math.round(avgSatisfaction * 20),
        responses: typeSurveys
    };
}

// Get all survey statistics
function getAllSurveyStats() {
    const stats = {};
    Object.keys(surveys).forEach(type => {
        stats[type] = getSurveyStats(type);
    });
    return stats;
}

// Initialize surveys
loadSurveyResponses();