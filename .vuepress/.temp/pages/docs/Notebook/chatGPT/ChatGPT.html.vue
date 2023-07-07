<template><div><h2 id="_1、-训练chatgpt" tabindex="-1"><a class="header-anchor" href="#_1、-训练chatgpt" aria-hidden="true">#</a> 1、 训练ChatGPT</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>I need some help generating AI art prompts on a software called Midjourney. First, I am going to explain what Midjourney is and what it can do. Then, I am going to give 10 example prompts in order for you to completely understand Midjourney.

One of the widely used text-to-image AI services available on the internet is Midjourney. Through Discord, a chat application, users can interact with the bot to produce images with just a few straightforward commands, without the need for coding skills. The results are visually attractive images that are easy to create.

You can Interact with the Midjourney Bot on Discord using a {{glossary.Command}}. Commands are used to create images, change default settings, monitor user info, and perform other helpful tasks.

The /imagine command generates a unique image from a short text description (known as a {{glossary.Prompt}}).

The Midjourney Bot works best with clear and specific sentences that describe the finished work. It does not work well with conversational style lists of requests. Rather than providing specific instructions, such as 'Show me a picture of lots of blooming California poppies, make them bright, vibrant orange, and draw them in an illustrated style with colored pencils,' try describing what you want in a more straightforward manner, such as 'Vibrant orange California poppies illustrated with colored pencils.

Generating an image activates the free Midjourney trial.Trial users can make roughly 25 Jobs before needing to subscribe. A Job is any action that uses the Midjourney Bot. Jobs include using the /imagine command to create a grid of images, upscaling images, or creating image variations, all using your free trial time. Use the /info command to check your Fast Time Remaining to see your remaining Trial time.

Here are some prompting notes:

Prompt Length

Prompts can be very simple. Single words (or even an emoji!) will produce an image. Very short prompts will rely heavily on Midjourney’s default style, so a more descriptive prompt is better for a unique look. However, super-long prompts aren’t always better. Concentrate on the main concepts you want to create.

Grammar

The Midjourney Bot does not understand grammar, sentence structure, or words like humans. Word choice also matters. More specific synonyms work better in many circumstances. Instead of big, try gigantic, enormous, or immense. Remove words when possible. Fewer words mean each word has a more powerful influence. Use commas, brackets, and hyphens to help organize your thoughts, but know the Midjourney Bot will not reliably interpret them. The Midjourney Bot does not consider capitalization. Midjourney Model Version 5 is slightly better than other models at interpreting traditional sentence structure.

Focus on What you Want

It is better to describe what you want instead of what you don’t want. If you ask for a party with “no cake,” your image will probably include a cake. If you want to ensure an object is not in the final image, try advance prompting using the --no parameter.

Think About What Details Matter

Anything left unsaid may surprise you. Be as specific or vague as you want, but anything you leave out will be randomized. Being vague is a great way to get variety, but you may not get the specific details you want.

Try to be clear about any context or details that are important to you. Think about:

style:magic realism,photorealistic,Minimalist,film style,Bauhaus,futuristic,Cyberpunk,impressionist style,national geography, etc.

artists:Shinkai Makoto,Hayao Miyazaki,akira toriyama,Picasso,adrian tomine, etc.

Subject: person, animal, character, location, object, etc.

Medium: photo, painting, illustration, sculpture, doodle, tapestry,gouache,oil painting,Vector etc.

Environment: indoors, outdoors, on the moon, in Narnia, underwater, the Emerald City, etc.

Lighting: soft, ambient, overcast, neon, studio lights, etc

Color: vibrant, muted, bright, monochromatic, colorful, black and white, pastel, etc.

Mood: Sedate, calm, raucous, energetic, etc.

Composition: Portrait, headshot, closeup, birds-eye view, etc.

Use Collective Nouns
Plural words leave a lot to chance. Try specific numbers. "Three cats" is more specific than "cats." Collective nouns also work, “flock of birds” instead of "birds.”

Parameters Available

Aspect Ratios
--aspect, or --ar Change the aspect ratio of a generation.

Chaos
--chaos <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span> <span class="token attr-name">0–100</span><span class="token punctuation">></span></span> Change how varied the results will be. Higher values produce more unusual and unexpected generations.

No
--no Negative prompting, --no plants would try to remove plants from the image.

Quality
--quality <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>.25,</span> <span class="token attr-name">.5,</span> <span class="token attr-name">1</span><span class="token punctuation">></span></span>, or --q <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>.25,</span> <span class="token attr-name">.5,</span> <span class="token attr-name">1</span><span class="token punctuation">></span></span> How much rendering quality time you want to spend. The default value is 1. Higher values cost more and lower values cost less.

Repeat
--repeat &lt;1–40>, or --r &lt;1–40> Create multiple Jobs from a single prompt. --repeat is useful for quickly rerunning a job multiple times.

Seed
--seed <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>integer</span> <span class="token attr-name">between</span> <span class="token attr-name">0–4294967295</span><span class="token punctuation">></span></span> The Midjourney bot uses a seed number to create a field of visual noise, like television static, as a starting point to generate the initial image grids. Seed numbers are generated randomly for each image but can be specified with the --seed or --sameseed parameter. Using the same seed number and prompt will produce similar ending images.

Stop
--stop <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>integer</span> <span class="token attr-name">between</span> <span class="token attr-name">10–100</span><span class="token punctuation">></span></span> Use the --stop parameter to finish a Job part way through the process. Stopping a Job at an earlier percentage can create blurrier, less detailed results.

Stylize
--stylize <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span>, or --s <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span> parameter influences how strongly Midjourney's default aesthetic style is applied to Jobs.

Niji
--niji An alternative model focused on anime style images.

Version
--version &lt;5, 5.1 ,5.2> or --v &lt;5, 5.1 ,5.2> Use a different version of the Midjourney algorithm. The current algorithm (V5.2) is the default setting.

Now that you understand the basics of MidJourney here are some example prompts to further understand how these are typed out:

astronaut playing chess against a monkey, 2d flat, simple, vibrant, neon colors, fun, groovy, chess pieces floating, set on the moon, movie poster, epic --v 5.2 --ar 2:3

a magical, vibrant, steampunk, Erlenmeyer Flask with a red, boiling substance, sitting on a white table, white background, 4k
paint splatter::2, fish::4, 3d colorful explosion::3, computer monitor::10, fire 3d effect, hyper realistic::5, accent lighting, global illumination, cinematic, 18mm lens, f/2.4, national geographic photography, immersive on black background::10 --ar 16:9 --v 5.2 --q 1

japanese lofi style, the streets of neo tokyo, with a porsche 911 in the street, massive skyscraper in the background, 64 bit style, shadows and lighting, clean, simple, satisfying --v 5.1 --ar 16:9

Dreamy pastel portrait, female model, long wavy hair, soft gaze, flowery headpiece, delicate makeup, ethereal atmosphere, soft focus, medium format film, Mamiya RZ67, Fujifilm Pro 400H, f3.5

hyper realistic photograph, portrait of a happy white male, mid 30's, stubble beard, grey shirt, medium length hair dramatic light, looking down + film grain, Leica 50mm, Kodak portra 800, chiaroscuro, f1. 4, golden hour --ar 3:4

hyper realistic photograph, portrait of a tattooed south American indigenous black woman, future punk, gold tattoo line, side profile, summer, dramatic light, looking down + film grain, Leica 50mm, Kodak portra 800, chiaroscuro, f1.4, --ar 3:4 --s 250

A very cute bright yellow robot, whole body, running in a forest at night, Mysterious adventure, flowers, Plants, Fireflies, complex details, popmart blind box, clay material, Pixar trend, 3d art, c4d, octane rendering, animation lighting, uplight --ar 9:16 --v 5 --s 750

Leonardo Dicaprio, highly detailed, contemplating taking his life, 8k, ultra detailed,realistic --stylize 500

sad looking man in a polo style shirt smoking a cigar looking over the edge of a yacht, 4k, realistic on a rainy day at sea --ar 3:4 --s 250

Do you understand ? Say "yes" if you understand
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、告诉它输出的格式" tabindex="-1"><a class="header-anchor" href="#_2、告诉它输出的格式" aria-hidden="true">#</a> 2、告诉它输出的格式</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>I want you to use this formula to write Midjourney Prompts: 

(image we're prompting), (5 descriptive keywords or phrases),(photorealistic style) , (camera model and lens), (lighting) ,(Environment)

Do you understand this formula? Say "yes" if you understand
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有关键词的分类</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>(style)</td>
<td>(artists)</td>
<td>(Medium)</td>
<td>(Environment)</td>
<td>(Lighting)</td>
</tr>
<tr>
<td>(Color)</td>
<td>(Mood)</td>
<td>(Composition)</td>
<td>(camera model and lens)</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_3、输入主题" tabindex="-1"><a class="header-anchor" href="#_3、输入主题" aria-hidden="true">#</a> 3、输入主题</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>Using the formula provided, write me a prompt for [主题],and translated into Chinese at the end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、让chatgpt多组思路" tabindex="-1"><a class="header-anchor" href="#_4、让chatgpt多组思路" aria-hidden="true">#</a> 4、让chatgpt多组思路</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>write me 4 Midjourney prompts of [主题],and translated into Chinese at the end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5、改变风格" tabindex="-1"><a class="header-anchor" href="#_5、改变风格" aria-hidden="true">#</a> 5、改变风格</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>I'd like to change the formula to: 

(image we're prompting), (5 descriptive keywords or phrases), (Minimalist style), (illustration,Vector) ,(Color),(Composition)

Type yes if you understand

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有关键词的分类</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>(style)</td>
<td>(artists)</td>
<td>(Medium)</td>
<td>(Environment)</td>
<td>(Lighting)</td>
</tr>
<tr>
<td>(Color)</td>
<td>(Mood)</td>
<td>(Composition)</td>
<td>(camera model and lens)</td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


