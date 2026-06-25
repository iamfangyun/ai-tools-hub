/* ============================================================
   AI Tools Hub — app.js
   ============================================================ */

// ─── i18n ────────────────────────────────────────────────────
const I18N = {
  en: {
    site_name: 'AI Tools Hub',
    search_placeholder: 'Search AI tools...',
    categories: 'Categories',
    pricing_filter: 'Pricing',
    all: 'All',
    free: 'Free',
    freemium: 'Freemium',
    paid: 'Paid',
    sort_popular: 'Popular',
    sort_newest: 'Newest',
    sort_az: 'A → Z',
    no_results: 'No tools found',
    no_results_desc: 'Try adjusting your search or filters',
    features: 'Key Features',
    visit_site: 'Visit Website',
    footer_rights: 'All rights reserved.',
    privacy_policy: 'Privacy Policy',
    results_count: (n) => `${n} tool${n !== 1 ? 's' : ''} found`,
    // categories
    cat_all: 'All Tools',
    cat_chatbot: 'Chatbot',
    cat_image: 'Image Generation',
    cat_video: 'Video',
    cat_audio: 'Audio & Music',
    cat_code: 'Code & Dev',
    cat_writing: 'Writing',
    cat_productivity: 'Productivity',
    cat_data: 'Data & Analytics',
    cat_design: 'Design',
    cat_marketing: 'Marketing',
    cat_education: 'Education',
    cat_research: 'Research',
  },
  zh: {
    site_name: 'AI工具导航',
    search_placeholder: '搜索 AI 工具...',
    categories: '分类',
    pricing_filter: '价格',
    all: '全部',
    free: '免费',
    freemium: '免费增值',
    paid: '付费',
    sort_popular: '热门',
    sort_newest: '最新',
    sort_az: 'A → Z',
    no_results: '未找到工具',
    no_results_desc: '请尝试调整搜索条件或筛选器',
    features: '核心功能',
    visit_site: '访问网站',
    footer_rights: '保留所有权利。',
    privacy_policy: '隐私政策',
    results_count: (n) => `共找到 ${n} 个工具`,
    cat_all: '全部工具',
    cat_chatbot: '聊天机器人',
    cat_image: '图像生成',
    cat_video: '视频',
    cat_audio: '音频与音乐',
    cat_code: '编程开发',
    cat_writing: '写作',
    cat_productivity: '效率工具',
    cat_data: '数据分析',
    cat_design: '设计',
    cat_marketing: '营销',
    cat_education: '教育',
    cat_research: '研究',
  },
};

// ─── CATEGORIES ──────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',       emoji: '🌐' },
  { id: 'chatbot',   emoji: '💬' },
  { id: 'image',     emoji: '🎨' },
  { id: 'video',     emoji: '🎬' },
  { id: 'audio',     emoji: '🎵' },
  { id: 'code',      emoji: '💻' },
  { id: 'writing',   emoji: '✍️' },
  { id: 'productivity', emoji: '⚡' },
  { id: 'data',      emoji: '📊' },
  { id: 'design',    emoji: '🖌️' },
  { id: 'marketing', emoji: '📣' },
  { id: 'education', emoji: '📚' },
  { id: 'research',  emoji: '🔬' },
];

// ─── TOOLS DATA (placeholder — replace with real data) ──────
const TOOLS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    name_zh: 'ChatGPT',
    icon: '💬',
    category: 'chatbot',
    pricing: 'freemium',
    description: 'Advanced AI chatbot by OpenAI for conversation, writing, coding, and analysis.',
    description_zh: 'OpenAI 推出的先进 AI 聊天机器人，可用于对话、写作、编程和分析。',
    features: ['GPT-4o model', 'Web browsing', 'Image generation', 'Code interpreter', 'Custom GPTs'],
    features_zh: ['GPT-4o 模型', '联网搜索', '图像生成', '代码解释器', '自定义 GPT'],
    url: 'https://chat.openai.com',
    popular: 100,
    date: '2022-11-30',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    name_zh: 'Midjourney',
    icon: '🎨',
    category: 'image',
    pricing: 'paid',
    description: 'AI-powered image generation tool that creates stunning artwork from text prompts.',
    description_zh: 'AI 驱动的图像生成工具，根据文本提示创建令人惊叹的艺术作品。',
    features: ['High-quality art', 'Style customization', 'Variations & upscaling', 'Discord integration'],
    features_zh: ['高质量艺术', '风格自定义', '变体与放大', 'Discord 集成'],
    url: 'https://midjourney.com',
    popular: 95,
    date: '2022-07-12',
  },
  {
    id: 'claude',
    name: 'Claude',
    name_zh: 'Claude',
    icon: '🤖',
    category: 'chatbot',
    pricing: 'freemium',
    description: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest.',
    description_zh: 'Anthropic 的 AI 助手，专注于有用、无害和诚实。',
    features: ['Large context window', 'Document analysis', 'Code generation', 'Multilingual'],
    features_zh: ['大上下文窗口', '文档分析', '代码生成', '多语言支持'],
    url: 'https://claude.ai',
    popular: 92,
    date: '2023-03-14',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    name_zh: 'Stable Diffusion',
    icon: '🖼️',
    category: 'image',
    pricing: 'free',
    description: 'Open-source image generation model that runs locally or in the cloud.',
    description_zh: '可在本地或云端运行的开源图像生成模型。',
    features: ['Open source', 'Local deployment', 'Fine-tuning support', 'Community models'],
    features_zh: ['开源', '本地部署', '微调支持', '社区模型'],
    url: 'https://stability.ai',
    popular: 88,
    date: '2022-08-22',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    name_zh: 'GitHub Copilot',
    icon: '💻',
    category: 'code',
    pricing: 'paid',
    description: 'AI pair programmer that suggests code completions and entire functions.',
    description_zh: 'AI 配对编程工具，提供代码补全和完整功能建议。',
    features: ['Multi-language support', 'IDE integration', 'Code suggestions', 'Chat mode'],
    features_zh: ['多语言支持', 'IDE 集成', '代码建议', '聊天模式'],
    url: 'https://github.com/features/copilot',
    popular: 90,
    date: '2021-10-29',
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    name_zh: 'Jasper AI',
    icon: '✍️',
    category: 'writing',
    pricing: 'paid',
    description: 'AI writing assistant for creating marketing copy, blog posts, and content.',
    description_zh: '用于创建营销文案、博客文章和内容的 AI 写作助手。',
    features: ['Brand voice', 'Template library', 'SEO optimization', 'Team collaboration'],
    features_zh: ['品牌声音', '模板库', 'SEO 优化', '团队协作'],
    url: 'https://jasper.ai',
    popular: 78,
    date: '2021-01-15',
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    name_zh: 'Runway ML',
    icon: '🎬',
    category: 'video',
    pricing: 'freemium',
    description: 'AI-powered creative suite for video editing, generation, and effects.',
    description_zh: 'AI 驱动的创意套件，用于视频编辑、生成和特效。',
    features: ['Gen-3 video generation', 'Background removal', 'Motion tracking', 'AI effects'],
    features_zh: ['Gen-3 视频生成', '背景移除', '运动追踪', 'AI 特效'],
    url: 'https://runwayml.com',
    popular: 82,
    date: '2020-12-01',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    name_zh: 'ElevenLabs',
    icon: '🎵',
    category: 'audio',
    pricing: 'freemium',
    description: 'AI voice synthesis platform for realistic text-to-speech and voice cloning.',
    description_zh: 'AI 语音合成平台，提供逼真的文本转语音和声音克隆。',
    features: ['Voice cloning', 'Multi-language TTS', 'Sound effects', 'Real-time streaming'],
    features_zh: ['声音克隆', '多语言 TTS', '音效', '实时流媒体'],
    url: 'https://elevenlabs.io',
    popular: 80,
    date: '2022-10-01',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    name_zh: 'Notion AI',
    icon: '⚡',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-powered writing and productivity features integrated into Notion workspace.',
    description_zh: '集成到 Notion 工作区的 AI 驱动写作和效率功能。',
    features: ['Summarization', 'Writing assistance', 'Action items', 'Translation'],
    features_zh: ['内容摘要', '写作辅助', '待办事项', '翻译'],
    url: 'https://notion.so',
    popular: 76,
    date: '2023-02-22',
  },
  {
    id: 'remio',
    name: 'Remio',
    name_zh: 'Remio',
    icon: '🧠',
    category: 'productivity',
    pricing: 'freemium',
    description: 'Local-first AI memory and personal knowledge base for focused context retrieval.',
    description_zh: '本地优先的 AI 记忆和个人知识库，用于快速检索个人上下文。',
    features: ['Local indexes', 'Vector retrieval', 'File parsing', 'Audio transcription', 'Agent context'],
    features_zh: ['本地索引', '向量检索', '文件解析', '音频转写', 'Agent 上下文'],
    url: 'https://remio.ai',
    popular: 77,
    date: '2026-06-25',
  },
  {
    id: 'tableau-gpt',
    name: 'Tableau AI',
    name_zh: 'Tableau AI',
    icon: '📊',
    category: 'data',
    pricing: 'paid',
    description: 'AI-powered data visualization and analytics platform by Salesforce.',
    description_zh: 'Salesforce 推出的 AI 驱动数据可视化和分析平台。',
    features: ['Natural language queries', 'Auto-insights', 'Dashboard creation', 'Predictive analytics'],
    features_zh: ['自然语言查询', '自动洞察', '仪表盘创建', '预测分析'],
    url: 'https://tableau.com',
    popular: 70,
    date: '2023-05-10',
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    name_zh: 'Figma AI',
    icon: '🖌️',
    category: 'design',
    pricing: 'freemium',
    description: 'AI features in Figma for auto-layout, content generation, and design suggestions.',
    description_zh: 'Figma 中的 AI 功能，提供自动布局、内容生成和设计建议。',
    features: ['Auto layout', 'Content generation', 'Design suggestions', 'Image editing'],
    features_zh: ['自动布局', '内容生成', '设计建议', '图像编辑'],
    url: 'https://figma.com',
    popular: 74,
    date: '2024-06-26',
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    name_zh: 'Perplexity AI',
    icon: '🔬',
    category: 'research',
    pricing: 'freemium',
    description: 'AI-powered search engine that provides cited answers from across the web.',
    description_zh: 'AI 驱动的搜索引擎，提供带引用的网页搜索答案。',
    features: ['Cited answers', 'Real-time web search', 'Follow-up questions', 'Collections'],
    features_zh: ['引用答案', '实时网页搜索', '追问功能', '收藏集'],
    url: 'https://perplexity.ai',
    popular: 86,
    date: '2022-12-01',
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    name_zh: 'Grammarly',
    icon: '📝',
    category: 'writing',
    pricing: 'freemium',
    description: 'AI writing assistant for grammar, spelling, punctuation, and style improvements.',
    description_zh: 'AI 写作助手，用于语法、拼写、标点和风格改进。',
    features: ['Grammar check', 'Tone detection', 'Plagiarism check', 'Style suggestions'],
    features_zh: ['语法检查', '语气检测', '抄袭检查', '风格建议'],
    url: 'https://grammarly.com',
    popular: 84,
    date: '2009-07-01',
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    name_zh: 'Canva AI',
    icon: '🎨',
    category: 'design',
    pricing: 'freemium',
    description: 'AI-powered design platform with Magic Design, text-to-image, and smart templates.',
    description_zh: 'AI 驱动的设计平台，提供魔法设计、文字生图和智能模板。',
    features: ['Magic Design', 'Text to image', 'Brand kit', 'Video editing'],
    features_zh: ['魔法设计', '文字生图', '品牌套件', '视频编辑'],
    url: 'https://canva.com',
    popular: 85,
    date: '2023-03-01',
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    name_zh: 'Copy.ai',
    icon: '📣',
    category: 'marketing',
    pricing: 'freemium',
    description: 'AI-powered copywriting tool for marketing teams to generate content at scale.',
    description_zh: 'AI 驱动的文案工具，帮助营销团队大规模生成内容。',
    features: ['Sales copy', 'Email campaigns', 'Social media', 'Workflow automation'],
    features_zh: ['销售文案', '邮件营销', '社交媒体', '工作流自动化'],
    url: 'https://copy.ai',
    popular: 68,
    date: '2020-10-01',
  },
  {
    id: 'duolingo-max',
    name: 'Duolingo Max',
    name_zh: 'Duolingo Max',
    icon: '📚',
    category: 'education',
    pricing: 'freemium',
    description: 'AI-enhanced language learning with GPT-4 powered explanations and roleplay.',
    description_zh: 'AI 增强的语言学习，提供 GPT-4 驱动的解释和角色扮演。',
    features: ['Roleplay conversations', 'Explain my answer', 'Personalized lessons', 'Speech recognition'],
    features_zh: ['角色对话', '答案解释', '个性化课程', '语音识别'],
    url: 'https://duolingo.com',
    popular: 75,
    date: '2023-03-14',
  },
  // ── Writing & Content ──
  {
    id: 'writesonic',
    name: 'Writesonic',
    name_zh: 'Writesonic',
    icon: '📝',
    category: 'writing',
    pricing: 'freemium',
    description: 'AI writer for blog posts, ads, emails, and social media content.',
    description_zh: 'AI 写作工具，用于博客文章、广告、邮件和社交媒体内容。',
    features: ['AI article writer', 'Landing page copy', 'Chatsonic chatbot', 'Brand voice'],
    features_zh: ['AI 文章写作', '落地页文案', 'Chatsonic 聊天', '品牌声音'],
    url: 'https://writesonic.com',
    popular: 65,
    date: '2020-11-01',
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    name_zh: 'QuillBot',
    icon: '✏️',
    category: 'writing',
    pricing: 'freemium',
    description: 'AI paraphrasing tool that rewrites and improves your text instantly.',
    description_zh: 'AI 改写工具，即时重写和改进你的文本。',
    features: ['Paraphraser', 'Grammar checker', 'Summarizer', 'Citation generator'],
    features_zh: ['改写工具', '语法检查', '摘要生成', '引用生成'],
    url: 'https://quillbot.com',
    popular: 79,
    date: '2017-08-01',
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    name_zh: 'Wordtune',
    icon: '🔤',
    category: 'writing',
    pricing: 'freemium',
    description: 'AI writing companion that helps you rephrase sentences and improve clarity.',
    description_zh: 'AI 写作助手，帮助重述句子并提高清晰度。',
    features: ['Rewrite sentences', 'Casual/formal tone', 'Shorten/expand', 'Browser extension'],
    features_zh: ['重写句子', '随性/正式语气', '缩短/扩展', '浏览器扩展'],
    url: 'https://wordtune.com',
    popular: 62,
    date: '2020-08-01',
  },
  // ── Image & Design ──
  {
    id: 'dall-e',
    name: 'DALL·E 3',
    name_zh: 'DALL·E 3',
    icon: '🎭',
    category: 'image',
    pricing: 'freemium',
    description: 'OpenAI\'s latest text-to-image model integrated into ChatGPT.',
    description_zh: 'OpenAI 最新文本生成图像模型，已集成到 ChatGPT。',
    features: ['Text-to-image', 'ChatGPT integration', 'Inpainting', 'Variations'],
    features_zh: ['文本生图', 'ChatGPT 集成', '局部重绘', '变体生成'],
    url: 'https://openai.com/dall-e-3',
    popular: 87,
    date: '2023-10-03',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    name_zh: 'Leonardo.ai',
    icon: '🖌️',
    category: 'image',
    pricing: 'freemium',
    description: 'AI image generation platform for game assets, concept art, and design.',
    description_zh: 'AI 图像生成平台，用于游戏素材、概念艺术和设计。',
    features: ['Custom model training', 'Real-time generation', 'Texture synthesis', 'API access'],
    features_zh: ['自定义模型训练', '实时生成', '纹理合成', 'API 接口'],
    url: 'https://leonardo.ai',
    popular: 72,
    date: '2022-12-01',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    name_zh: 'Ideogram',
    icon: '🔤',
    category: 'image',
    pricing: 'freemium',
    description: 'AI image generator known for excellent text rendering in images.',
    description_zh: '以图像中文字渲染出色闻名的 AI 图像生成器。',
    features: ['Text in images', 'Photorealistic output', 'Magic prompt', 'Free tier'],
    features_zh: ['图像内文字', '逼真输出', '魔法提示', '免费额度'],
    url: 'https://ideogram.ai',
    popular: 64,
    date: '2023-08-01',
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    name_zh: 'Adobe Firefly',
    icon: '🔥',
    category: 'design',
    pricing: 'freemium',
    description: 'Adobe\'s family of creative generative AI models for images, vectors, and design.',
    description_zh: 'Adobe 创意生成式 AI 模型家族，用于图像、矢量图和设计。',
    features: ['Text-to-image', 'Generative fill', 'Text effects', 'Recolor vectors'],
    features_zh: ['文本生图', '生成式填充', '文字效果', '矢量重着色'],
    url: 'https://firefly.adobe.com',
    popular: 77,
    date: '2023-03-21',
  },
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    name_zh: 'Remove.bg',
    icon: '✂️',
    category: 'image',
    pricing: 'freemium',
    description: 'AI-powered background removal tool for photos in seconds.',
    description_zh: 'AI 驱动的照片背景去除工具，几秒内完成。',
    features: ['Auto background removal', 'Batch processing', 'API', 'HD quality'],
    features_zh: ['自动去背景', '批量处理', 'API 接口', '高清质量'],
    url: 'https://remove.bg',
    popular: 73,
    date: '2018-11-01',
  },
  // ── Video ──
  {
    id: 'sora',
    name: 'Sora',
    name_zh: 'Sora',
    icon: '🎥',
    category: 'video',
    pricing: 'paid',
    description: 'OpenAI\'s text-to-video generation model creating realistic scenes.',
    description_zh: 'OpenAI 的文本生成视频模型，创建逼真场景。',
    features: ['Text-to-video', '60s clips', 'Realistic physics', 'Storyboard'],
    features_zh: ['文本生视频', '60秒片段', '逼真物理', '故事板'],
    url: 'https://sora.com',
    popular: 83,
    date: '2024-12-09',
  },
  {
    id: 'pika',
    name: 'Pika',
    name_zh: 'Pika',
    icon: '🎬',
    category: 'video',
    pricing: 'freemium',
    description: 'AI video generation platform for creating and editing videos from text or images.',
    description_zh: 'AI 视频生成平台，从文本或图片创建和编辑视频。',
    features: ['Text-to-video', 'Image-to-video', 'Video editing', 'Lip sync'],
    features_zh: ['文本生视频', '图片生视频', '视频编辑', '口型同步'],
    url: 'https://pika.art',
    popular: 71,
    date: '2023-06-01',
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    name_zh: 'HeyGen',
    icon: '🗣️',
    category: 'video',
    pricing: 'freemium',
    description: 'AI video generation platform with talking avatars and voice cloning.',
    description_zh: 'AI 视频生成平台，提供数字人头像和声音克隆。',
    features: ['AI avatars', 'Voice cloning', 'Lip sync', 'Multi-language'],
    features_zh: ['AI 数字人', '声音克隆', '口型同步', '多语言'],
    url: 'https://heygen.com',
    popular: 76,
    date: '2022-12-01',
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    name_zh: 'Synthesia',
    icon: '👤',
    category: 'video',
    pricing: 'paid',
    description: 'Create professional AI videos with digital avatars in 140+ languages.',
    description_zh: '用数字人头像在 140+ 种语言中创建专业 AI 视频。',
    features: ['140+ languages', 'Custom avatars', 'Templates', 'API access'],
    features_zh: ['140+ 种语言', '自定义数字人', '模板', 'API 接口'],
    url: 'https://synthesia.io',
    popular: 69,
    date: '2020-04-01',
  },
  // ── Audio & Music ──
  {
    id: 'suno',
    name: 'Suno',
    name_zh: 'Suno',
    icon: '🎶',
    category: 'audio',
    pricing: 'freemium',
    description: 'AI music generation platform that creates full songs from text prompts.',
    description_zh: 'AI 音乐生成平台，根据文本提示创建完整歌曲。',
    features: ['Full song generation', 'Custom lyrics', 'Multiple genres', 'Audio extend'],
    features_zh: ['完整歌曲生成', '自定义歌词', '多种风格', '音频延长'],
    url: 'https://suno.com',
    popular: 81,
    date: '2023-12-01',
  },
  {
    id: 'udio',
    name: 'Udio',
    name_zh: 'Udio',
    icon: '🎧',
    category: 'audio',
    pricing: 'freemium',
    description: 'AI music generator creating high-quality songs with vocals and instruments.',
    description_zh: 'AI 音乐生成器，创建含人声和乐器的高质量歌曲。',
    features: ['Vocal generation', 'Genre mixing', 'Remix', 'High quality'],
    features_zh: ['人声生成', '风格混合', '混音', '高品质'],
    url: 'https://udio.com',
    popular: 67,
    date: '2024-04-01',
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    name_zh: 'Murf AI',
    icon: '🎙️',
    category: 'audio',
    pricing: 'freemium',
    description: 'AI voice generator for voiceovers, podcasts, and presentations.',
    description_zh: 'AI 语音生成器，用于配音、播客和演示文稿。',
    features: ['120+ voices', '20+ languages', 'Pitch control', 'Studio quality'],
    features_zh: ['120+ 种声音', '20+ 种语言', '音调控制', '录音棚品质'],
    url: 'https://murf.ai',
    popular: 63,
    date: '2021-01-01',
  },
  // ── Code & Dev ──
  {
    id: 'cursor',
    name: 'Cursor',
    name_zh: 'Cursor',
    icon: '🖱️',
    category: 'code',
    pricing: 'freemium',
    description: 'AI-first code editor built for pair programming with AI.',
    description_zh: 'AI 优先的代码编辑器，专为 AI 配对编程打造。',
    features: ['AI code completion', 'Chat with codebase', 'Multi-file edits', 'Codebase indexing'],
    features_zh: ['AI 代码补全', '与代码库对话', '多文件编辑', '代码库索引'],
    url: 'https://cursor.com',
    popular: 84,
    date: '2023-01-01',
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    name_zh: 'Replit AI',
    icon: '💻',
    category: 'code',
    pricing: 'freemium',
    description: 'AI-powered coding platform with Ghostwriter for code generation and debugging.',
    description_zh: 'AI 驱动的编程平台，提供 Ghostwriter 代码生成和调试。',
    features: ['Code generation', 'Debug assistant', 'Deploy from browser', 'Collaboration'],
    features_zh: ['代码生成', '调试助手', '浏览器部署', '协作'],
    url: 'https://replit.com',
    popular: 71,
    date: '2022-09-01',
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    name_zh: 'v0 by Vercel',
    icon: '⚡',
    category: 'code',
    pricing: 'freemium',
    description: 'AI-powered UI generator that creates React components from text descriptions.',
    description_zh: 'AI 驱动的 UI 生成器，从文本描述创建 React 组件。',
    features: ['Text-to-UI', 'React components', 'Tailwind CSS', 'Iterative refinement'],
    features_zh: ['文本生 UI', 'React 组件', 'Tailwind CSS', '迭代优化'],
    url: 'https://v0.dev',
    popular: 70,
    date: '2023-10-01',
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    name_zh: 'Bolt.new',
    icon: '🔩',
    category: 'code',
    pricing: 'freemium',
    description: 'AI full-stack web app builder that runs in the browser.',
    description_zh: 'AI 全栈 Web 应用构建器，在浏览器中运行。',
    features: ['Full-stack apps', 'Live preview', 'Multiple frameworks', 'One-click deploy'],
    features_zh: ['全栈应用', '实时预览', '多框架支持', '一键部署'],
    url: 'https://bolt.new',
    popular: 68,
    date: '2024-06-01',
  },
  // ── Productivity ──
  {
    id: 'gamma',
    name: 'Gamma',
    name_zh: 'Gamma',
    icon: '📊',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-powered presentation and document creator from simple prompts.',
    description_zh: 'AI 驱动的演示文稿和文档创建工具，简单提示即可生成。',
    features: ['AI presentations', 'Document creation', 'Web pages', 'One-click redesign'],
    features_zh: ['AI 演示文稿', '文档创建', '网页', '一键重新设计'],
    url: 'https://gamma.app',
    popular: 73,
    date: '2022-08-01',
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    name_zh: 'Otter.ai',
    icon: '🦦',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI meeting assistant for transcription, summaries, and action items.',
    description_zh: 'AI 会议助手，提供转录、摘要和待办事项。',
    features: ['Real-time transcription', 'Meeting summaries', 'Action items', 'Slide capture'],
    features_zh: ['实时转录', '会议摘要', '待办事项', '幻灯片捕获'],
    url: 'https://otter.ai',
    popular: 72,
    date: '2018-02-01',
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    name_zh: 'Zapier AI',
    icon: '🔗',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-powered workflow automation connecting 6000+ apps.',
    description_zh: 'AI 驱动的工作流自动化，连接 6000+ 应用。',
    features: ['Natural language automation', '6000+ integrations', 'AI agents', 'Code-free'],
    features_zh: ['自然语言自动化', '6000+ 集成', 'AI 代理', '零代码'],
    url: 'https://zapier.com',
    popular: 74,
    date: '2023-05-01',
  },
  {
    id: 'todoist-ai',
    name: 'Todoist AI',
    name_zh: 'Todoist AI',
    icon: '✅',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-enhanced task manager with smart scheduling and task breakdown.',
    description_zh: 'AI 增强的任务管理器，提供智能排程和任务拆解。',
    features: ['AI task breakdown', 'Smart scheduling', 'Natural language input', 'Filters'],
    features_zh: ['AI 任务拆解', '智能排程', '自然语言输入', '过滤器'],
    url: 'https://todoist.com',
    popular: 66,
    date: '2023-09-01',
  },
  // ── Marketing & SEO ──
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    name_zh: 'Surfer SEO',
    icon: '📈',
    category: 'marketing',
    pricing: 'paid',
    description: 'AI-powered SEO tool for content strategy, optimization, and ranking.',
    description_zh: 'AI 驱动的 SEO 工具，用于内容策略、优化和排名。',
    features: ['Content editor', 'SERP analyzer', 'Keyword research', 'AI writing'],
    features_zh: ['内容编辑器', '搜索结果分析', '关键词研究', 'AI 写作'],
    url: 'https://surferseo.com',
    popular: 70,
    date: '2017-06-01',
  },
  {
    id: 'semrush',
    name: 'Semrush',
    name_zh: 'Semrush',
    icon: '🔍',
    category: 'marketing',
    pricing: 'paid',
    description: 'All-in-one marketing toolkit with AI features for SEO, PPC, and content.',
    description_zh: '一站式营销工具包，含 SEO、PPC 和内容 AI 功能。',
    features: ['Keyword research', 'Site audit', 'Content AI', 'Competitor analysis'],
    features_zh: ['关键词研究', '网站审计', '内容 AI', '竞品分析'],
    url: 'https://semrush.com',
    popular: 75,
    date: '2008-01-01',
  },
  {
    id: 'mailchimp-ai',
    name: 'Mailchimp AI',
    name_zh: 'Mailchimp AI',
    icon: '📧',
    category: 'marketing',
    pricing: 'freemium',
    description: 'AI-powered email marketing platform with content and audience optimization.',
    description_zh: 'AI 驱动的邮件营销平台，提供内容和受众优化。',
    features: ['AI subject lines', 'Content optimizer', 'Send time optimization', 'Segments'],
    features_zh: ['AI 标题', '内容优化器', '发送时间优化', '受众细分'],
    url: 'https://mailchimp.com',
    popular: 71,
    date: '2023-06-01',
  },
  {
    id: 'jasper-art',
    name: 'AdCreative.ai',
    name_zh: 'AdCreative.ai',
    icon: '📢',
    category: 'marketing',
    pricing: 'freemium',
    description: 'AI-powered ad creative generator for social media and display ads.',
    description_zh: 'AI 驱动的广告创意生成器，用于社交媒体和展示广告。',
    features: ['Ad generation', 'A/B testing', 'Brand consistency', 'Multi-platform'],
    features_zh: ['广告生成', 'A/B 测试', '品牌一致性', '多平台'],
    url: 'https://adcreative.ai',
    popular: 62,
    date: '2021-10-01',
  },
  // ── Data & Analytics ──
  {
    id: 'julius-ai',
    name: 'Julius AI',
    name_zh: 'Julius AI',
    icon: '📊',
    category: 'data',
    pricing: 'freemium',
    description: 'AI data analyst that helps you analyze, visualize, and understand data.',
    description_zh: 'AI 数据分析师，帮助分析、可视化和理解数据。',
    features: ['Data analysis', 'Chart generation', 'Natural language queries', 'CSV/Excel support'],
    features_zh: ['数据分析', '图表生成', '自然语言查询', 'CSV/Excel 支持'],
    url: 'https://julius.ai',
    popular: 66,
    date: '2023-03-01',
  },
  {
    id: 'monkeylearn',
    name: 'MonkeyLearn',
    name_zh: 'MonkeyLearn',
    icon: '🐒',
    category: 'data',
    pricing: 'freemium',
    description: 'AI-powered text analytics and classification platform.',
    description_zh: 'AI 驱动的文本分析和分类平台。',
    features: ['Text classification', 'Sentiment analysis', 'Custom models', 'API'],
    features_zh: ['文本分类', '情感分析', '自定义模型', 'API 接口'],
    url: 'https://monkeylearn.com',
    popular: 58,
    date: '2017-01-01',
  },
  // ── Research & Education ──
  {
    id: 'scite',
    name: 'Scite',
    name_zh: 'Scite',
    icon: '🔬',
    category: 'research',
    pricing: 'paid',
    description: 'AI-powered citation analysis tool showing how papers support or contrast each other.',
    description_zh: 'AI 驱动的引用分析工具，展示论文间的支持或反驳关系。',
    features: ['Smart citations', 'Citation context', 'Journal metrics', 'AI assistant'],
    features_zh: ['智能引用', '引用上下文', '期刊指标', 'AI 助手'],
    url: 'https://scite.ai',
    popular: 60,
    date: '2018-11-01',
  },
  {
    id: 'consensus',
    name: 'Consensus',
    name_zh: 'Consensus',
    icon: '📑',
    category: 'research',
    pricing: 'freemium',
    description: 'AI-powered academic search engine that extracts findings from papers.',
    description_zh: 'AI 驱动的学术搜索引擎，从论文中提取研究发现。',
    features: ['Paper search', 'Finding extraction', 'Citation analysis', 'GPT-4 summaries'],
    features_zh: ['论文搜索', '发现提取', '引用分析', 'GPT-4 摘要'],
    url: 'https://consensus.app',
    popular: 63,
    date: '2021-09-01',
  },
  {
    id: 'chatpdf',
    name: 'ChatPDF',
    name_zh: 'ChatPDF',
    icon: '📄',
    category: 'research',
    pricing: 'freemium',
    description: 'Chat with any PDF document using AI. Ask questions and get instant answers.',
    description_zh: '用 AI 与任何 PDF 文档对话。提问并立即获得答案。',
    features: ['PDF analysis', 'Q&A', 'Multi-PDF chat', 'Citation support'],
    features_zh: ['PDF 分析', '问答', '多 PDF 对话', '引用支持'],
    url: 'https://chatpdf.com',
    popular: 67,
    date: '2023-02-01',
  },
  {
    id: 'khanmigo',
    name: 'Khanmigo',
    name_zh: 'Khanmigo',
    icon: '🎓',
    category: 'education',
    pricing: 'freemium',
    description: 'Khan Academy\'s AI tutor powered by GPT-4 for personalized learning.',
    description_zh: 'Khan Academy 的 AI 导师，由 GPT-4 驱动，提供个性化学习。',
    features: ['AI tutoring', 'Step-by-step hints', 'Essay coaching', 'Multiple subjects'],
    features_zh: ['AI 辅导', '分步提示', '作文指导', '多学科'],
    url: 'https://khanacademy.org/khan-labs',
    popular: 64,
    date: '2023-03-14',
  },
  {
    id: 'quizlet-ai',
    name: 'Quizlet AI',
    name_zh: 'Quizlet AI',
    icon: '🃏',
    category: 'education',
    pricing: 'freemium',
    description: 'AI-enhanced flashcard and study platform with smart learning modes.',
    description_zh: 'AI 增强的闪卡和学习平台，提供智能学习模式。',
    features: ['AI flashcards', 'Magic Notes', 'Practice tests', 'Learn mode'],
    features_zh: ['AI 闪卡', '魔法笔记', '练习测试', '学习模式'],
    url: 'https://quizlet.com',
    popular: 73,
    date: '2023-08-01',
  },
  // ── Chatbot & Search ──
  {
    id: 'gemini',
    name: 'Gemini',
    name_zh: 'Gemini',
    icon: '💎',
    category: 'chatbot',
    pricing: 'freemium',
    description: 'Google\'s multimodal AI model for text, image, video, and code.',
    description_zh: 'Google 的多模态 AI 模型，支持文本、图像、视频和代码。',
    features: ['Multimodal input', 'Google integration', 'Code generation', 'Image analysis'],
    features_zh: ['多模态输入', 'Google 集成', '代码生成', '图像分析'],
    url: 'https://gemini.google.com',
    popular: 89,
    date: '2023-12-06',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    name_zh: 'DeepSeek',
    icon: '🔮',
    category: 'chatbot',
    pricing: 'free',
    description: 'Open-source AI model with strong reasoning capabilities and code generation.',
    description_zh: '开源 AI 模型，具有强大的推理能力和代码生成。',
    features: ['Open source', 'Deep reasoning', 'Code expert', 'Free API'],
    features_zh: ['开源', '深度推理', '代码专家', '免费 API'],
    url: 'https://chat.deepseek.com',
    popular: 78,
    date: '2024-01-01',
  },
  {
    id: 'grok',
    name: 'Grok',
    name_zh: 'Grok',
    icon: '🚀',
    category: 'chatbot',
    pricing: 'freemium',
    description: 'xAI\'s chatbot with real-time X/Twitter data access and witty personality.',
    description_zh: 'xAI 的聊天机器人，可实时访问 X/Twitter 数据，风格幽默。',
    features: ['Real-time data', 'X integration', 'Image generation', 'Uncensored mode'],
    features_zh: ['实时数据', 'X 集成', '图像生成', '无审查模式'],
    url: 'https://grok.com',
    popular: 74,
    date: '2023-11-01',
  },
  {
    id: 'mistral',
    name: 'Mistral Le Chat',
    name_zh: 'Mistral Le Chat',
    icon: '🌬️',
    category: 'chatbot',
    pricing: 'free',
    description: 'European AI assistant by Mistral with strong multilingual support.',
    description_zh: 'Mistral 推出的欧洲 AI 助手，具有强大的多语言支持。',
    features: ['Multilingual', 'Document analysis', 'Code generation', 'Web search'],
    features_zh: ['多语言', '文档分析', '代码生成', '联网搜索'],
    url: 'https://chat.mistral.ai',
    popular: 66,
    date: '2024-02-01',
  },
  // ── More Image/Design ──
  {
    id: 'flux',
    name: 'Flux',
    name_zh: 'Flux',
    icon: '💫',
    category: 'image',
    pricing: 'freemium',
    description: 'State-of-the-art open image model by Black Forest Labs with superior quality.',
    description_zh: 'Black Forest Labs 开发的最先进开源图像模型，质量卓越。',
    features: ['Open source', 'Text rendering', 'Photorealistic', 'Multiple variants'],
    features_zh: ['开源', '文字渲染', '逼真图像', '多种变体'],
    url: 'https://blackforestlabs.ai',
    popular: 69,
    date: '2024-08-01',
  },
  {
    id: 'tome',
    name: 'Tome',
    name_zh: 'Tome',
    icon: '📖',
    category: 'design',
    pricing: 'freemium',
    description: 'AI-powered storytelling and presentation tool with auto-layout.',
    description_zh: 'AI 驱动的叙事和演示工具，提供自动布局。',
    features: ['AI presentations', 'Auto-layout', 'Image generation', 'Collaboration'],
    features_zh: ['AI 演示', '自动布局', '图像生成', '协作'],
    url: 'https://tome.app',
    popular: 61,
    date: '2022-09-01',
  },
  // ── More Productivity ──
  {
    id: 'mem-ai',
    name: 'Mem AI',
    name_zh: 'Mem AI',
    icon: '🧠',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-powered note-taking app with self-organizing workspace.',
    description_zh: 'AI 驱动的笔记应用，提供自组织工作空间。',
    features: ['Self-organizing notes', 'AI search', 'Smart editing', 'Collections'],
    features_zh: ['自组织笔记', 'AI 搜索', '智能编辑', '收藏集'],
    url: 'https://mem.ai',
    popular: 58,
    date: '2021-06-01',
  },
  {
    id: 'sana-ai',
    name: 'Sana AI',
    name_zh: 'Sana AI',
    icon: '💡',
    category: 'productivity',
    pricing: 'freemium',
    description: 'AI-powered knowledge platform for learning and knowledge management.',
    description_zh: 'AI 驱动的知识平台，用于学习和知识管理。',
    features: ['AI search', 'Course creation', 'Meeting assistant', 'Knowledge base'],
    features_zh: ['AI 搜索', '课程创建', '会议助手', '知识库'],
    url: 'https://sanalabs.com',
    popular: 55,
    date: '2023-01-01',
  },
  // ── More Audio ──
  {
    id: 'descript',
    name: 'Descript',
    name_zh: 'Descript',
    icon: '🎵',
    category: 'audio',
    pricing: 'freemium',
    description: 'AI-powered audio/video editor — edit media by editing text transcripts.',
    description_zh: 'AI 驱动的音视频编辑器 — 通过编辑文字转录来编辑媒体。',
    features: ['Text-based editing', 'AI voices', 'Screen recording', 'Podcast tools'],
    features_zh: ['基于文本的编辑', 'AI 声音', '屏幕录制', '播客工具'],
    url: 'https://descript.com',
    popular: 68,
    date: '2019-05-01',
  },
  // ── More Code ──
  {
    id: 'windsurf',
    name: 'Windsurf',
    name_zh: 'Windsurf',
    icon: '🏄',
    category: 'code',
    pricing: 'freemium',
    description: 'AI-first IDE by Codeium with deep codebase understanding.',
    description_zh: 'Codeium 推出的 AI 优先 IDE，深度理解代码库。',
    features: ['AI completion', 'Cascade agents', 'Codebase indexing', 'Multi-language'],
    features_zh: ['AI 补全', 'Cascade 代理', '代码库索引', '多语言'],
    url: 'https://codeium.com/windsurf',
    popular: 67,
    date: '2024-11-01',
  },
  {
    id: 'cody',
    name: 'Sourcegraph Cody',
    name_zh: 'Sourcegraph Cody',
    icon: '🤖',
    category: 'code',
    pricing: 'freemium',
    description: 'AI coding assistant that understands your entire codebase context.',
    description_zh: 'AI 编程助手，理解你的整个代码库上下文。',
    features: ['Codebase context', 'AI autocomplete', 'Chat', 'PR review'],
    features_zh: ['代码库上下文', 'AI 自动补全', '聊天', 'PR 审查'],
    url: 'https://sourcegraph.com/cody',
    popular: 60,
    date: '2023-04-01',
  },
];

// ─── STATE ───────────────────────────────────────────────────
// Detect language from URL path (/en/ = English) or HTML lang attribute
let lang = window.location.pathname.startsWith('/en') ? 'en'
         : document.documentElement.lang === 'en' ? 'en'
         : localStorage.getItem('ai_tools_lang') || 'zh';
let activeCategory = 'all';
let activePricing = 'all';
let searchQuery = '';
let sortBy = 'popular';

// ─── DOM REFS ────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const searchInput     = $('#searchInput');
const searchClear     = $('#searchClear');
const sortSelect      = $('#sortSelect');
const langToggle      = $('#langToggle');
const langLabel       = $('#langLabel');
const categoryList    = $('#categoryList');
const categoryPills   = $('#categoryPills');
const pricingList     = $('#pricingList');
const toolsGrid       = $('#toolsGrid');
const emptyState      = $('#emptyState');
const resultsCount    = $('#resultsCount');
const sidebar         = $('#sidebar');
const sidebarOverlay  = $('#sidebarOverlay');
const menuToggle      = $('#menuToggle');
const modalOverlay    = $('#modalOverlay');
const modalClose      = $('#modalClose');

// ─── I18N HELPERS ────────────────────────────────────────────
function t(key) {
  return I18N[lang][key] || I18N.en[key] || key;
}

function applyI18N() {
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });
  langLabel.textContent = lang === 'en' ? '中文' : 'EN';
  document.documentElement.lang = lang;
}

// ─── CATEGORY NAME ───────────────────────────────────────────
function catName(id) {
  return t('cat_' + id) || id;
}

// ─── PRICING LABEL ──────────────────────────────────────────
function pricingLabel(p) {
  return t(p) || p;
}

// ─── RENDER CATEGORIES ──────────────────────────────────────
function renderCategories() {
  // Sidebar list
  categoryList.innerHTML = CATEGORIES.map(c => {
    const count = c.id === 'all'
      ? TOOLS.length
      : TOOLS.filter(t => t.category === c.id).length;
    return `
      <li class="category-item${activeCategory === c.id ? ' active' : ''}" data-cat="${c.id}">
        <span class="cat-emoji">${c.emoji}</span>
        <span class="cat-name">${catName(c.id)}</span>
        <span class="count">${count}</span>
      </li>`;
  }).join('');

  // Horizontal pills
  categoryPills.innerHTML = CATEGORIES.map(c => {
    return `<button class="category-pill${activeCategory === c.id ? ' active' : ''}" data-cat="${c.id}">${c.emoji} ${catName(c.id)}</button>`;
  }).join('');

  // Counts
  $('#countAll').textContent = TOOLS.length;
  $('#countFree').textContent = TOOLS.filter(t => t.pricing === 'free').length;
  $('#countFreemium').textContent = TOOLS.filter(t => t.pricing === 'freemium').length;
  $('#countPaid').textContent = TOOLS.filter(t => t.pricing === 'paid').length;
}

// ─── FILTERING & SORTING ────────────────────────────────────
function getFilteredTools() {
  let list = [...TOOLS];

  // Category
  if (activeCategory !== 'all') {
    list = list.filter(t => t.category === activeCategory);
  }

  // Pricing
  if (activePricing !== 'all') {
    list = list.filter(t => t.pricing === activePricing);
  }

  // Search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(t => {
      const name = (lang === 'zh' && t.name_zh) ? t.name_zh : t.name;
      const desc = (lang === 'zh' && t.description_zh) ? t.description_zh : t.description;
      const cat = catName(t.category).toLowerCase();
      return name.toLowerCase().includes(q)
        || desc.toLowerCase().includes(q)
        || cat.includes(q);
    });
  }

  // Sort
  switch (sortBy) {
    case 'popular':
      list.sort((a, b) => b.popular - a.popular);
      break;
    case 'newest':
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'az':
      list.sort((a, b) => {
        const na = (lang === 'zh' && a.name_zh) ? a.name_zh : a.name;
        const nb = (lang === 'zh' && b.name_zh) ? b.name_zh : b.name;
        return na.localeCompare(nb);
      });
      break;
  }

  return list;
}

// ─── RENDER TOOLS ────────────────────────────────────────────
function renderTools() {
  const list = getFilteredTools();

  if (list.length === 0) {
    toolsGrid.style.display = 'none';
    emptyState.style.display = '';
  } else {
    toolsGrid.style.display = '';
    emptyState.style.display = 'none';
  }

  toolsGrid.innerHTML = list.map((tool, i) => {
    const name = (lang === 'zh' && tool.name_zh) ? tool.name_zh : tool.name;
    const desc = (lang === 'zh' && tool.description_zh) ? tool.description_zh : tool.description;
    return `
      <div class="tool-card" data-id="${tool.id}" style="animation-delay:${Math.min(i * 0.03, 0.3)}s">
        <div class="tool-card-header">
          <div class="tool-icon">${tool.icon}</div>
          <div class="tool-info">
            <div class="tool-name">${name}</div>
            <div class="tool-desc">${desc}</div>
          </div>
        </div>
        <div class="tool-tags">
          <span class="tool-tag category">${catName(tool.category)}</span>
          <span class="tool-tag pricing-${tool.pricing}">${pricingLabel(tool.pricing)}</span>
        </div>
      </div>`;
  }).join('');

  resultsCount.textContent = t('results_count') instanceof Function
    ? t('results_count')(list.length)
    : `${list.length} tools`;
}

// ─── DETAIL MODAL ────────────────────────────────────────────
function openModal(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  const name = (lang === 'zh' && tool.name_zh) ? tool.name_zh : tool.name;
  const desc = (lang === 'zh' && tool.description_zh) ? tool.description_zh : tool.description;
  const features = (lang === 'zh' && tool.features_zh) ? tool.features_zh : tool.features;

  $('#modalIcon').textContent = tool.icon;
  $('#modalTitle').textContent = name;
  $('#modalCategory').textContent = catName(tool.category);

  const mp = $('#modalPricing');
  mp.textContent = pricingLabel(tool.pricing);
  mp.className = 'modal-pricing ' + tool.pricing;

  $('#modalDescription').textContent = desc;
  $('#modalFeatureList').innerHTML = features.map(f => `<li>${f}</li>`).join('');
  $('#modalVisitBtn').href = tool.url;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── SIDEBAR TOGGLE (mobile) ────────────────────────────────
function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── EVENT LISTENERS ─────────────────────────────────────────
function setupEvents() {
  // Search
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    renderTools();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    renderTools();
    searchInput.focus();
  });

  // Sort
  sortSelect.addEventListener('change', () => {
    sortBy = sortSelect.value;
    renderTools();
  });

  // Language toggle → navigate to other language
  langToggle.addEventListener('click', () => {
    if (lang === 'en') {
      window.location.href = '/';
    } else {
      window.location.href = '/en/';
    }
  });

  // Category clicks — sidebar
  categoryList.addEventListener('click', (e) => {
    const item = e.target.closest('.category-item');
    if (!item) return;
    activeCategory = item.dataset.cat;
    renderCategories();
    renderTools();
    closeSidebar();
  });

  // Category clicks — pills
  categoryPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.category-pill');
    if (!pill) return;
    activeCategory = pill.dataset.cat;
    renderCategories();
    renderTools();
  });

  // Pricing clicks
  pricingList.addEventListener('click', (e) => {
    const item = e.target.closest('.pricing-item');
    if (!item) return;
    activePricing = item.dataset.pricing;
    $$('.pricing-item').forEach(i => i.classList.toggle('active', i.dataset.pricing === activePricing));
    renderTools();
  });

  // Card click → tool detail page
  toolsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.tool-card');
    if (!card) return;
    const langPrefix = lang === 'en' ? 'en/' : '';
    window.location.href = `/${langPrefix}tool/${card.dataset.id}.html`;
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeSidebar(); }
  });

  // Mobile menu
  menuToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
  });
  sidebarOverlay.addEventListener('click', closeSidebar);
}

// ─── INIT ────────────────────────────────────────────────────
function init() {
  applyI18N();
  renderCategories();
  renderTools();
  setupEvents();
}

document.addEventListener('DOMContentLoaded', init);
