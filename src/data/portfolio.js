// Portfolio case studies organized by category
// Each case study includes summary info for cards and detailed content for full pages

export const portfolioCategories = [
  {
    id: 'ai-transformation',
    title: 'AI & Digital Transformation',
    description: 'Leveraging AI and automation to transform portfolio operations',
    cases: [
          {
      id: 'meeting-intelligence',
      headline: '70% Reduction in Meeting Documentation Time',
      client: 'Global Credit Fund',
      image: '/src/assets/images/case-studies/meeting-intelligence.jpg',
      challenge: 'The fund lacked a systematic, centralised process for capturing insights from hundreds of sales and analyst meetings, leaving valuable information trapped in personal notebooks, siloed compliance archives, or lost entirely.',
      techStack: ['AI', 'Analytics', 'Automation', 'Azure', 'SQL'],
      timeframe: '6 weeks',
      metrics: ['5-min turnaround', '100% coverage', 'Searchable archive', 'CRM population +85%'],
      details: {
        executiveSummary: 'Implemented an end-to-end meeting intelligence platform that connects Microsoft Teams, a lightweight SQL-based CRM, and an AI summarisation service. The solution cut documentation effort by 70 %, drove CRM completeness to 85 %, and made every meeting instantly searchable across the fund.',
        context: {
          situation: 'A global credit fund’s sales and investment teams log hundreds of calls with management, experts, and investors every month. Notes were sporadically entered into the fundraising CRM, analyst call transcripts were stored only for compliance, and webcast recordings lacked transcripts or slide decks.',
          businessImpact: 'Missing historical context slowed diligence, forced repeated conversations, limited cross-team collaboration, and created regulatory exposure.',
          stakeholders: ['Sales & Investor Relations', 'Credit Analysts', 'Compliance', 'Technology']
        },
        approach: {
          methodology: 'Agile pilot with incremental rollout',
          phases: [
            { phase: 'Discovery', duration: '1 week', activities: 'Process mapping, data audit, stakeholder workshops' },
            { phase: 'Pilot', duration: '2 weeks', activities: 'Teams bot deployed to Sales & IR, lightweight CRM spun up for analysts' },
            { phase: 'Rollout', duration: '3 weeks', activities: 'Full team deployment, integration with CRM and S3' }
          ],
          technologies: 'OpenAI for transcription and summarisation, Azure Speech Services for real-time processing, Microsoft Bot Framework, Azure SQL Database, Power Automate, CURL for web scraping'
        },
        results: {
          quantitative: [
            '70% reduction in meeting documentation effort',
            '100% of meetings and webcasts captured and indexed',
            '85% increase in CRM data completeness',
            'Average 5-minute turnaround for AI-generated summaries'
          ],
          qualitative: [
            'Sales teams receive ready-to-send follow-up notes',
            'Analysts can instantly surface prior calls across coverage',
            'Compliance benefits from a complete, timestamped audit trail'
          ]
        },
        technicalArchitecture: {
          components: [
            'Microsoft Teams bot for post-meeting prompts',
            'AI transcription & summarisation microservice',
            'Lightweight SQL CRM for analyst notes',
            'Web scraping & media ingestion pipeline',
            'Searchable knowledge base (Azure Cognitive Search)',
            'Integration layer to existing fundraising CRM'
          ],
          security: 'End-to-end encryption, on-premise option, SOC 2 Type II compliant',
          scalability: 'Designed to handle 10,000+ meetings and 200+ hours of media per month'
        }
      }
    },
      {
        id: 'lp-meeting-automation',
        headline: '2-Hour LP Prep Reduced to 2 Minutes',
        client: 'Mid-Market PE Fund',
        image: '/src/assets/images/case-studies/lp-automation.jpg',
        challenge: 'Investment teams spending hours preparing for LP meetings, gathering fragmented information.',
        techStack: ['AI', 'Web Scraping', 'Analytics'],
        timeframe: '4 weeks',
        metrics: ['98% time saved', 'Auto-updates', 'Zero errors'],
        
        details: {
          executiveSummary: 'Built an AI agent that automatically prepares comprehensive LP meeting briefs by aggregating data from multiple sources, reducing preparation time from hours to minutes.',
          
          context: {
            situation: 'Fund managers were spending 2-3 hours before each LP meeting gathering updates from various sources including CRM, news, and internal reports.',
            businessImpact: 'Senior team members were spending 15% of their time on administrative preparation rather than strategic activities.',
            stakeholders: ['General Partners', 'Investment Directors', 'Investor Relations team']
          },
          
          approach: {
            methodology: 'Rapid prototyping with continuous user feedback',
            phases: [
              { phase: 'Data Mapping', duration: '1 week', activities: 'Identified all data sources, mapped information flow' },
              { phase: 'AI Development', duration: '2 weeks', activities: 'Built intelligent agents for each data source' },
              { phase: 'Integration', duration: '1 week', activities: 'Connected to calendar, automated distribution' }
            ],
            technologies: 'Claude 4 for nuanced and contextual synthesis, Salesforce API integration, Web scraping for news and competitive intelligence'
          },
          
          results: {
            quantitative: [
              '98% reduction in meeting preparation time',
              '100% of LP meetings now have automated briefs attached to calendar invites',
              'Zero missed updates since deployment'
            ],
            qualitative: [
              'Partners can focus on relationship building rather than data gathering',
              'More comprehensive briefs with consistent format',
              'Real-time updates ensure latest information'
            ]
          }
        }
      },
      {
        id: 'esg-acceleration',
        headline: '10x Faster ESG Reporting Across Portfolio',
        client: 'Large-Cap PE Fund',
        image: '/src/assets/images/case-studies/esg-reporting.jpg',
        challenge: 'Quarterly ESG assessments for 50+ companies requiring specialized expertise teams lacked.',
        techStack: ['AI', 'Analytics', 'Automation'],
        timeframe: '8 weeks',
        metrics: ['10x faster', 'All frameworks', 'Audit-ready'],
        
        details: {
          executiveSummary: 'Developed an AI-powered ESG assessment platform that enables non-specialist teams to conduct comprehensive ESG evaluations across multiple frameworks, reducing reporting time by 90%.',
          
          context: {
            situation: 'Fund needed to assess 450+ covered companies annually against SASB, TCFD, and UN SDG frameworks, but lacked dedicated ESG capacity.',
            businessImpact: 'ESG reporting was becoming a bottleneck for fundraising and LP reporting, with potential compliance risks.',
            stakeholders: ['ESG Committee', 'Portfolio company management', 'Limited Partners']
          },
          
          approach: {
            methodology: 'Framework-driven development with expert validation',
            phases: [
              { phase: 'Framework Analysis', duration: '2 weeks', activities: 'Mapped all ESG frameworks, built question banks' },
              { phase: 'AI Workflow', duration: '1 weeks', activities: 'Dynamic ESG prompting capturing industry nuance and KPIs, validated outputs' },
              { phase: 'Platform Build', duration: '1 week', activities: 'Created user interface, reporting engine' }
            ],
            technologies: 'Custom LLM metaprompting, RAG system for framework knowledge, automated report generation'
          },
          
          results: {
            quantitative: [
              '90% reduction in time per ESG assessment',
              '100% framework coverage (SASB, TCFD, UN SDG)',
              '50+ companies assessed quarterly'
            ],
            qualitative: [
              'Non-specialists can now conduct professional ESG assessments',
              'Consistent methodology across entire portfolio',
              'Audit trail maintains compliance standards'
            ]
          }
        }
      },
      {
        id: 'compliance-monitoring',
        headline: 'Real-Time Compliance Risk Detection',
        client: 'Global Investment Firm',
        image: '/src/assets/images/case-studies/compliance-ai.jpg',
        challenge: 'Manual review of expert calls for insider information was slow and inconsistent.',
        techStack: ['AI', 'Analytics', 'Modelling'],
        timeframe: '6 weeks',
        metrics: ['100% coverage', 'Real-time', 'Regulatory compliant'],
        
        details: {
          executiveSummary: 'Implemented an AI-powered compliance monitoring system that analyzes all expert network calls in real-time, flagging potential insider information risks instantly.',
          
          context: {
            situation: 'Firm conducting 200+ expert calls monthly with manual spot-check reviews catching only 10% of potential issues.',
            businessImpact: 'Regulatory risk exposure with potential for significant fines and reputational damage.',
            stakeholders: ['Compliance team', 'Investment professionals', 'Legal department']
          },
          
          approach: {
            methodology: 'Risk-based implementation with regulatory alignment',
            phases: [
              { phase: 'Risk Mapping', duration: '1 week', activities: 'Identified risk patterns, regulatory requirements' },
              { phase: 'Model Development', duration: '3 weeks', activities: 'Built NLP models for risk detection' },
              { phase: 'Integration', duration: '2 weeks', activities: 'Connected to call systems, alert mechanisms' }
            ],
            technologies: 'Advanced NLP for conversation analysis, real-time processing pipeline, regulatory-compliant data handling'
          },
          
          results: {
            quantitative: [
              '100% of calls now monitored in real-time',
              '95% reduction in false positives vs keyword matching',
              '0 compliance violations since implementation'
            ],
            qualitative: [
              'Compliance team can focus on high-risk situations',
              'Investment team has confidence in compliance coverage',
              'Regulatory ready with full audit trails'
            ]
          }
        }
      }
    ]
  },
  {
    id: 'portfolio-intelligence',
    title: 'Portfolio Intelligence & Analytics',
    description: 'Data-driven insights and optimization across portfolio companies',
    cases: [
      {
        id: 'portfolio-optimization',
        headline: '£400M+ Portfolio Optimization Identified',
        client: 'Family Office',
        image: '/src/assets/images/case-studies/portfolio-optimization.jpg',
        challenge: 'Multi-billion pound portfolio with 700+ investments needed optimization with complex constraints.',
        techStack: ['Modelling', 'Analytics', 'AI'],
        timeframe: '12 weeks',
        metrics: ['£400M+ value', '700+ entities', 'Tax optimized'],
        
        details: {
          executiveSummary: 'Developed a sophisticated portfolio optimization platform using non-linear programming to identify £400M+ in value creation opportunities across 700+ investments while managing tax and liquidity constraints.',
          
          context: {
            situation: 'Ultra-high-net-worth family office managing £3B+ across 700+ entities needed to optimize holdings while considering tax, liquidity, and family member preferences.',
            businessImpact: 'Suboptimal allocation was leaving significant value on the table with unnecessary tax exposure.',
            stakeholders: ['Family principals', 'Investment committee', 'Tax advisors']
          },
          
          approach: {
            methodology: 'Quantitative optimization with stakeholder constraints',
            phases: [
              { phase: 'Data Consolidation', duration: '3 weeks', activities: 'Built single source of truth across all holdings' },
              { phase: 'Model Development', duration: '6 weeks', activities: 'Created optimization engine with constraints' },
              { phase: 'Scenario Analysis', duration: '3 weeks', activities: 'Ran multiple scenarios, validated results' }
            ],
            technologies: 'CPLEX optimization engine, Azure Synapse for data platform, Power BI for visualization'
          },
          
          results: {
            quantitative: [
              '£400M+ in optimization opportunities identified',
              '£50M in immediate tax savings',
              '30% improvement in risk-adjusted returns'
            ],
            qualitative: [
              'First-ever holistic view of entire portfolio',
              'Ability to model complex family constraints',
              'Ongoing optimization as market conditions change'
            ]
          }
        }
      },
      {
        id: 'dd-acceleration',
        headline: '60% Faster Due Diligence',
        client: 'Mid-Market PE Fund',
        image: '/src/assets/images/case-studies/dd-acceleration.jpg',
        challenge: 'Traditional FDD processes were manual and time-consuming with inconsistent outputs.',
        techStack: ['AI', 'Analytics', 'Automation'],
        timeframe: '8 weeks',
        metrics: ['60% faster', 'Higher accuracy', 'Risk scored'],
        
        details: {
          executiveSummary: 'Created an AI-powered due diligence platform that automates document analysis, financial modeling, and risk assessment, reducing DD timelines by 60% while improving accuracy.',
          
          context: {
            situation: 'Fund evaluating 50+ deals annually with traditional DD taking 6-8 weeks per deal, often missing key insights.',
            businessImpact: 'Slow DD process causing lost deals to competitors and inconsistent risk assessment.',
            stakeholders: ['Investment team', 'Operating partners', 'Portfolio company management']
          },
          
          approach: {
            methodology: 'Modular platform development with deal team input',
            phases: [
              { phase: 'Process Mapping', duration: '2 weeks', activities: 'Documented current DD process, identified automation opportunities' },
              { phase: 'Platform Build', duration: '4 weeks', activities: 'Built core modules for document processing, analysis' },
              { phase: 'Pilot Deals', duration: '2 weeks', activities: 'Tested on live deals, refined based on feedback' }
            ],
            technologies: 'GPT-4 for document analysis, automated financial modeling, risk scoring algorithms'
          },
          
          results: {
            quantitative: [
              '60% reduction in DD timeline (6 weeks to 2.5 weeks)',
              '95% accuracy in identifying key risks',
              '80% reduction in junior analyst time required'
            ],
            qualitative: [
              'More consistent risk assessment across deals',
              'Senior team can focus on strategic issues',
              'Better competitive position with faster response times'
            ]
          }
        }
      },
      {
        id: 'satellite-intelligence',
        headline: '20+ Acquisitions from Satellite Analysis',
        client: 'Real Estate PE Fund',
        image: '/src/assets/images/case-studies/satellite-intelligence.jpg',
        challenge: 'Identifying development opportunities across 1000+ properties in existing portfolio.',
        techStack: ['AI', 'Analytics', 'Web Scraping'],
        timeframe: '10 weeks',
        metrics: ['20+ deals', '1000+ analyzed', 'ROI ranked'],
        
        details: {
          executiveSummary: 'Leveraged satellite imagery and AI to analyze development potential across 1000+ properties, identifying 20+ high-value acquisition opportunities adjacent to existing portfolio.',
          
          context: {
            situation: 'Real estate fund with 1000+ properties needed to identify expansion opportunities but manual site visits were impractical.',
            businessImpact: 'Missing development opportunities that competitors were capturing.',
            stakeholders: ['Investment committee', 'Asset management team', 'Development partners']
          },
          
          approach: {
            methodology: 'Technology-driven site analysis with ground validation',
            phases: [
              { phase: 'Data Acquisition', duration: '2 weeks', activities: 'Gathered satellite imagery, planning data' },
              { phase: 'AI Analysis', duration: '4 weeks', activities: 'Built models to assess development potential' },
              { phase: 'Validation', duration: '4 weeks', activities: 'Ground-truthed top opportunities' }
            ],
            technologies: 'Computer vision for image analysis, geospatial analytics, planning database integration'
          },
          
          results: {
            quantitative: [
              '20+ high-potential sites identified',
              '£30M in development opportunities',
              '85% accuracy in site assessment'
            ],
            qualitative: [
              'Systematic approach to portfolio expansion',
              'Data-driven investment decisions',
              'Competitive advantage through technology'
            ]
          }
        }
      },
      {
        id: 'market-mapping',
        headline: 'Complete UK Education Market Mapped',
        client: 'Education-Focused PE',
        image: '/src/assets/images/case-studies/market-mapping.jpg',
        challenge: 'Needed comprehensive analysis of fragmented UK nursery market for roll-up strategy.',
        techStack: ['Web Scraping', 'Analytics', 'AI'],
        timeframe: '6 weeks',
        metrics: ['10,000+ analyzed', 'Quality scored', 'M&A targets'],
        
        details: {
          executiveSummary: 'Built comprehensive database of UK nursery market through web scraping and regulatory data analysis, identifying prime acquisition targets and market gaps.',
          
          context: {
            situation: 'PE fund planning nursery roll-up strategy needed to understand fragmented market of 10,000+ providers.',
            businessImpact: 'Without comprehensive market view, risked overpaying for acquisitions or missing best targets.',
            stakeholders: ['Investment team', 'Operating partners', 'Integration team']
          },
          
          approach: {
            methodology: 'Data aggregation with quality scoring',
            phases: [
              { phase: 'Data Collection', duration: '2 weeks', activities: 'Scraped Ofsted reports, financial data' },
              { phase: 'Analysis Engine', duration: '2 weeks', activities: 'Built quality scoring, identified patterns' },
              { phase: 'Target ID', duration: '2 weeks', activities: 'Shortlisted acquisition targets' }
            ],
            technologies: 'Python web scraping, NLP for report analysis, Tableau for visualization'
          },
          
          results: {
            quantitative: [
              '10,000+ nurseries analyzed',
              '150 prime acquisition targets identified',
              '£200M+ in identified roll-up opportunities'
            ],
            qualitative: [
              'First comprehensive view of UK nursery market',
              'Data-driven acquisition strategy',
              'Identified underserved geographic areas'
            ]
          }
        }
      },
      {
        id: 'zero-vendor-platform',
        headline: 'Zero Vendor Lock-in Analytics Platform',
        client: 'Large-Cap PE Fund',
        image: '/src/assets/images/case-studies/vendor-free-platform.jpg',
        challenge: 'Needed unified analytics across 30+ portfolio companies with full ownership and control.',
        techStack: ['Analytics', 'Modelling', 'Automation'],
        timeframe: '16 weeks',
        metrics: ['100% owned', '30+ companies', 'IT approved'],
        
        details: {
          executiveSummary: 'Architected and deployed a fully self-hosted analytics platform in client\'s Azure environment, providing unified portfolio visibility without any vendor dependencies.',
          
          context: {
            situation: 'PE fund with 30+ portfolio companies using various BI tools wanted unified platform but required full ownership and no vendor lock-in.',
            businessImpact: 'Fragmented reporting causing delays in identifying portfolio issues and opportunities.',
            stakeholders: ['Operating partners', 'IT security team', 'Portfolio company CFOs']
          },
          
          approach: {
            methodology: 'Enterprise architecture with security-first design',
            phases: [
              { phase: 'Architecture', duration: '4 weeks', activities: 'Designed secure, scalable architecture' },
              { phase: 'Platform Build', duration: '8 weeks', activities: 'Built in client environment with their team' },
              { phase: 'Rollout', duration: '4 weeks', activities: 'Connected portfolio companies, training' }
            ],
            technologies: 'Azure Synapse for data platform, Power BI Embedded for visualization, DevOps CI/CD pipelines'
          },
          
          results: {
            quantitative: [
              '100% client-owned solution',
              '30+ portfolio companies connected',
              '80% reduction in reporting time'
            ],
            qualitative: [
              'Complete control over data and platform',
              'IT security team fully satisfied',
              'Scalable for future acquisitions'
            ]
          }
        }
      }
    ]
  },
  {
    id: 'operational-excellence',
    title: 'Operational Excellence',
    description: 'Streamlining fund operations and portfolio company processes',
    cases: [
      {
        id: 'quarterly-automation',
        headline: '3 Weeks to 2 Days: Quarterly Reporting',
        client: 'Growth Equity Fund',
        image: '/src/assets/images/case-studies/quarterly-automation.jpg',
        challenge: 'Manual quarterly reviews across 50+ companies taking weeks of analyst time.',
        techStack: ['Automation', 'Analytics', 'Modelling'],
        timeframe: '6 weeks',
        metrics: ['90% faster', '50+ companies', 'Auto-commentary'],
        
        details: {
          executiveSummary: 'Automated the entire quarterly portfolio review process, reducing preparation time from 3 weeks to 2 days while improving consistency and insight quality.',
          
          context: {
            situation: 'Fund managing 50+ portfolio companies with quarterly reviews requiring 3 weeks of manual data gathering and slide creation.',
            businessImpact: 'Analysts spending 25% of time on repetitive reporting tasks instead of value-add analysis.',
            stakeholders: ['Operating partners', 'Investment team', 'Limited Partners']
          },
          
          approach: {
            methodology: 'Process automation with intelligent commentary',
            phases: [
              { phase: 'Process Analysis', duration: '1 week', activities: 'Mapped current workflow, identified patterns' },
              { phase: 'Automation Build', duration: '3 weeks', activities: 'Built data pipelines, commentary engine' },
              { phase: 'Testing', duration: '2 weeks', activities: 'Validated outputs, refined algorithms' }
            ],
            technologies: 'SQL Server for data consolidation, VBA for Excel automation, PowerPoint automation APIs'
          },
          
          results: {
            quantitative: [
              '90% reduction in preparation time',
              '100% consistent formatting across portfolio',
              '50+ companies processed automatically'
            ],
            qualitative: [
              'Analysts focus on insights not data gathering',
              'Earlier identification of portfolio issues',
              'Improved LP meeting quality'
            ]
          }
        }
      },
      
      {
        id: 'esg-data-platform',
        headline: '95% ESG Data Coverage Achieved',
        client: 'Impact-Focused PE',
        image: '/src/assets/images/case-studies/esg-platform.jpg',
        challenge: 'Inconsistent ESG data collection made LP reporting difficult and unreliable.',
        techStack: ['Analytics', 'Automation', 'AI'],
        timeframe: '8 weeks',
        metrics: ['95% coverage', 'Real-time', 'LP-ready'],
        
        details: {
          executiveSummary: 'Built centralized ESG data platform that automated collection across portfolio, achieving 95% data coverage and real-time LP reporting capability.',
          
          context: {
            situation: 'Impact fund with 40+ portfolio companies struggling to collect consistent ESG data for quarterly LP reports.',
            businessImpact: 'Poor ESG reporting affecting fundraising and LP relationships.',
            stakeholders: ['ESG team', 'Portfolio companies', 'Limited Partners']
          },
          
          approach: {
            methodology: 'API-first integration with portfolio systems',
            phases: [
              { phase: 'Data Mapping', duration: '2 weeks', activities: 'Identified all ESG data sources and gaps' },
              { phase: 'Platform Build', duration: '4 weeks', activities: 'Created collection and reporting platform' },
              { phase: 'Integration', duration: '2 weeks', activities: 'Connected portfolio company systems' }
            ],
            technologies: 'API integrations, master data management, automated reporting dashboards'
          },
          
          results: {
            quantitative: [
              '95% ESG data coverage (up from 40%)',
              'Real-time data vs quarterly lag',
              '80% reduction in data collection effort'
            ],
            qualitative: [
              'LPs impressed with comprehensive ESG reporting',
              'Portfolio companies engaged through easy process',
              'Enabled impact measurement and management'
            ]
          }
        }
      },
      {
        id: 'month-end-optimization',
        headline: 'Month-End Close Cut by 5 Days',
        client: 'Portfolio Company',
        image: '/src/assets/images/case-studies/month-end-close.jpg',
        challenge: 'Lengthy month-end process affecting covenant reporting and management visibility.',
        techStack: ['Automation', 'Modelling', 'Analytics'],
        timeframe: '8 weeks',
        metrics: ['5 days saved', 'Zero errors', 'Covenant compliant'],
        
        details: {
          executiveSummary: 'Transformed finance function operations through intelligent automation, reducing month-end close from 12 to 7 days while eliminating errors.',
          
          context: {
            situation: 'PE-backed company with complex operations taking 12 days to close books, risking covenant breaches.',
            businessImpact: 'Delayed financial visibility hampering decision-making and stressing lender relationships.',
            stakeholders: ['CFO', 'Finance team', 'PE sponsors', 'Lenders']
          },
          
          approach: {
            methodology: 'Process mining and intelligent automation',
            phases: [
              { phase: 'Process Mining', duration: '2 weeks', activities: 'Analyzed current workflows, identified bottlenecks' },
              { phase: 'Automation', duration: '4 weeks', activities: 'Built RPA bots for repetitive tasks' },
              { phase: 'Optimization', duration: '2 weeks', activities: 'Refined processes, trained team' }
            ],
            technologies: 'UiPath for RPA, SQL automation for reconciliations, process mining tools'
          },
          
          results: {
            quantitative: [
              '5-day reduction in close time (40% improvement)',
              '100% accuracy (zero errors in 6 months)',
              '100% covenant compliance maintained'
            ],
            qualitative: [
              'Finance team morale improved dramatically',
              'Earlier visibility for management decisions',
              'Strengthened lender confidence'
            ]
          }
        }
      }
    ]
  },
  {
    id: 'value-creation',
    title: 'Value Creation & Exit Readiness',
    description: 'Driving portfolio company growth and preparing for successful exits',
    cases: [
      {
        id: 'revenue-uplift',
        headline: '15-20% Revenue Uplift Identified',
        client: 'B2B Software Portfolio',
        image: '/src/assets/images/case-studies/revenue-uplift.jpg',
        challenge: 'Post-acquisition, needed rapid customer insights to validate investment thesis.',
        techStack: ['Analytics', 'AI', 'Modelling'],
        timeframe: '6 weeks',
        metrics: ['15-20% uplift', 'Churn predicted', 'Cross-sell mapped'],
        
        details: {
          executiveSummary: 'Deployed customer analytics platform that identified 15-20% revenue uplift opportunities through churn reduction and cross-sell optimization.',
          
          context: {
            situation: 'Newly acquired B2B software company with limited customer analytics and growing churn concerns.',
            businessImpact: 'Without customer insights, risked missing growth targets and damaging exit multiples.',
            stakeholders: ['Portfolio company CEO', 'Sales leadership', 'PE operating partners']
          },
          
          approach: {
            methodology: 'Data-driven customer value optimization',
            phases: [
              { phase: 'Data Integration', duration: '2 weeks', activities: 'Consolidated CRM, usage, and financial data' },
              { phase: 'Analytics Build', duration: '3 weeks', activities: 'Built churn prediction and LTV models' },
              { phase: 'Action Planning', duration: '1 week', activities: 'Created implementation roadmap' }
            ],
            technologies: 'Python for modeling, Azure ML for predictions, Power BI for dashboards'
          },
          
          results: {
            quantitative: [
              '15-20% revenue uplift opportunity identified',
              '85% accuracy in churn prediction',
              '£2M in immediate cross-sell opportunities'
            ],
            qualitative: [
              'Sales team armed with predictive insights',
              'Customer success proactively managing at-risk accounts',
              'Board confidence in growth strategy'
            ]
          }
        }
      },
      {
  id: 'pricing-optimization',
  headline: 'Identified 22% Net Revenue Pricing Opportunity',
  client: 'SaaS Platform',
  image: '/src/assets/images/case-studies/pricing-optimization.png',
  challenge: 'No systematic approach to managing customer contracts and terms despite competitive pressure.',
  techStack: ['AI', 'Analytics', 'Automation'],
  timeframe: '8 weeks',
  metrics: ['22% uplift identified', '3-year analysis', 'Contract visibility'],
  
  details: {
    executiveSummary: 'Built AI-powered contract intelligence system that identified 22% pricing opportunity by analyzing 3 years of mispriced contracts and creating data-driven negotiation framework.',
    
    context: {
      situation: 'SaaS platform with fragmented contract management - terms incorrectly entered, renegotiations not captured, inflationary increases missed, and new customers priced without reference to existing deals.',
      businessImpact: 'Leaving significant revenue on table through pricing inconsistencies, missed escalations, and lack of negotiation leverage.',
      stakeholders: ['CEO', 'Head of Sales', 'Finance team', 'Customer Success']
    },
    
    approach: {
      methodology: 'Contract intelligence with pricing analytics',
      phases: [
        { phase: 'Contract Capture', duration: '2 weeks', activities: 'AI extraction of key terms from all contracts' },
        { phase: 'Analysis', duration: '3 weeks', activities: 'Historic pricing analysis, identifying gaps and patterns' },
        { phase: 'Dashboard Build', duration: '3 weeks', activities: 'Pricing distribution insights and negotiation tools' }
      ],
      technologies: 'NLP for contract extraction, ML for pricing analysis, interactive dashboards for negotiation support'
    },
    
    results: {
      quantitative: [
        '22% pricing opportunity identified across portfolio',
        '£1.2M in missed inflationary increases recovered',
        '85% of contracts now properly captured and tracked'
      ],
      qualitative: [
        'Sales team negotiates with full visibility of pricing distribution',
        'Finance can track and enforce contractual escalations',
        'New customer pricing based on data, not guesswork'
      ]
    }
  }
},
            {
        id: 'exit-readiness',
        headline: 'Exit Multiple Increased by 2.5x',
        client: 'Data Analytics Firm',
        image: '/src/assets/images/case-studies/exit-multiple.jpg',
        challenge: 'Portfolio company needed to demonstrate scalable data capabilities for premium exit.',
        techStack: ['Analytics', 'AI', 'Automation'],
        timeframe: '16 weeks',
        metrics: ['2.5x multiple', '100+ buyers', 'Premium achieved'],
        
        details: {
          executiveSummary: 'Transformed portfolio company\'s data capabilities and built compelling equity story, resulting in 2.5x increase in exit multiple.',
          
          context: {
            situation: 'Analytics firm preparing for exit but lacking scalable technology platform and compelling growth story.',
            businessImpact: 'Without transformation, would exit at services multiple rather than software multiple.',
            stakeholders: ['Portfolio company leadership', 'PE partners', 'Investment bankers']
          },
          
          approach: {
            methodology: 'Platform transformation with equity story development',
            phases: [
              { phase: 'Platform Build', duration: '8 weeks', activities: 'Created scalable SaaS platform from services' },
              { phase: 'Data Room', duration: '4 weeks', activities: 'Built automated data room with live demos' },
              { phase: 'Story Development', duration: '4 weeks', activities: 'Created compelling equity story' }
            ],
            technologies: 'Cloud platform migration, automated reporting, virtual data room technology'
          },
          
          results: {
            quantitative: [
              '2.5x increase in exit multiple',
              '100+ potential buyers engaged',
              '40% premium to initial expectations'
            ],
            qualitative: [
              'Repositioned as technology company not services',
              'Demonstrable recurring revenue streams',
              'Strong buyer competition drove premium'
            ]
          }
        }
      }
    ]
  }
];

// Helper function to get all cases for easy access
export const getAllCases = () => {
  return portfolioCategories.flatMap(category => 
    category.cases.map(caseStudy => ({
      ...caseStudy,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );
};

// Helper function to get a specific case by ID
export const getCaseById = (id) => {
  const allCases = getAllCases();
  return allCases.find(c => c.id === id);
};

// Helper function to get category by ID
export const getCategoryById = (id) => {
  return portfolioCategories.find(cat => cat.id === id);
};