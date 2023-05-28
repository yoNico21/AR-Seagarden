import { create, add } from './tools';
import '/src/scss/hero.scss';

export function hero(el) {
  let section = create('section', 'hero');

  let div = create('div', 'hero-img');

  let svg = create('svg', 'logo');
  svg.innerHTML = content;

  let h4 = create('h4', 'subtext');
  const subtext =
    'Take a deep dive through this digital garden full of sea creatures';
  h4.innerText = subtext;

  let button = create('button', 'btn');
  button.classList.add('btn-start');
  button.innerText = 'Start Experience';

  add(section, el);
  add(div, section);
  add(svg, section);
  add(h4, section);
  add(button, section);
}

const content = `
    <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.93 234.38"><path d="M250.92,49.61c-.43,.52-1.07,.82-1.75,.82h-7.04c-1.12,0-2.07-.81-2.25-1.92l-.75-4.75c-.17-1.11-1.13-1.92-2.25-1.92h-4.68c-1.13,0-2.08,.82-2.25,1.94l-.71,4.71c-.17,1.11-1.12,1.94-2.25,1.94h-7.03c-.68,0-1.32-.3-1.75-.82s-.61-1.2-.49-1.87L226.09,1.96c.2-1.08,1.14-1.86,2.24-1.86h12.42c1.1,0,2.04,.78,2.24,1.86l8.42,45.78c.12,.67-.06,1.35-.49,1.87Zm-16.38-18.19c.66,0,1.29-.29,1.72-.79,.43-.5,.62-1.17,.52-1.82l-1.04-6.82c-.41-2.75-.82-6.33-1.02-8.59h-.34c-.14,2.25-.62,5.84-1.02,8.59l-1.08,6.8c-.11,.66,.08,1.33,.52,1.83,.43,.51,1.07,.8,1.73,.8h0Z"/><path d="M274.15,28.2l-.03,.11,3.82,16.89c.28,1.25-.02,2.56-.82,3.57s-2.02,1.58-3.3,1.58h-1.13c-2.02,0-3.75-1.43-4.14-3.41l-2.92-14.86c-.1-.51-.55-.88-1.07-.88-.6,0-1.09,.49-1.09,1.09v13.79c.02,1.13-.42,2.21-1.21,3.01-.79,.8-1.87,1.25-3,1.25h-.98c-1.12,0-2.21-.45-3-1.25-.79-.8-1.23-1.89-1.22-3.01V5.14l-.02-1.87c0-.86,.33-1.7,.94-2.31,.61-.61,1.44-.96,2.3-.96h8.22c10.15,0,12.73,7.25,12.73,15.91v.14c0,5.04-1.12,9.39-4.09,12.13v.02Zm-5.25-12.62c0-3.03-.75-5.63-4.19-5.63h-.05c-.65,0-1.18,.53-1.18,1.18v9.18c0,.65,.53,1.18,1.18,1.18,3.49,0,4.24-2.53,4.24-5.7v-.21Z"/><path d="M153.64,122.96c0,8.75-6.94,13.87-17.75,13.87-7.34,0-12.96-2.31-16.24-6.82-1.29-1.86-1.46-4.27-.44-6.28,1.01-2.02,3.05-3.32,5.31-3.39l.49-.02c2.27-.05,4.36,1.2,5.4,3.21,.94,1.88,2.91,3.03,5.01,2.92,2.44,0,3.86-1.09,3.86-3.08s-1.42-3.76-5.68-6.02l-6.62-3.35c-6.15-3.28-9.3-7.66-9.3-13.4,0-8.54,6.86-14.35,17.98-14.29,6.02,.04,10.79,1.78,13.83,5.25,1.56,1.8,1.95,4.33,1,6.51s-3.06,3.63-5.44,3.72h-.05c-2.24,.1-4.36-1.04-5.51-2.97-.78-1.41-2.31-2.24-3.91-2.12-2.45,0-3.79,1.23-3.79,3.14,0,2.19,1.74,3.48,5.13,5.26l6.7,3.42c6.62,3.42,10.02,8.27,10.01,14.43h.01Z"/><path d="M169.01,120.65c-.34,.34-.53,.8-.52,1.27v.62c0,2.7,0,5.05,3.17,5.05,3.49,0,3.49-2.83,3.49-4.15v-.21h11.99v.28c0,4.01-1.27,7.81-4.52,10.3-2.62,2-6.19,2.9-10.71,2.9-4.76,0-8.65-.97-11.19-2.97-3.57-2.83-4.44-7.26-4.44-13.76v-5.19c0-6.43,.88-10.85,4.44-13.69,2.54-2,6.43-3.04,11.03-3.04s8.41,1.04,10.95,3.04c3.73,2.9,4.45,7.54,4.45,13.69v3.53c0,.99-.8,1.8-1.8,1.8h-15.05c-.48,0-.94,.19-1.27,.53h-.02Zm2.65-14.08c-3.17,0-3.17,2.63-3.17,4.84,0,.99,.8,1.8,1.8,1.8h2.83c.99,0,1.8-.8,1.8-1.8,0-2.21,0-4.84-3.25-4.84h-.01Z"/><path d="M212.99,134.23c.05,.64-.17,1.27-.6,1.74-.43,.47-1.04,.74-1.69,.74h-4.19c-1.2,0-2.2-.92-2.28-2.12-.04-.47-.07-1.01-.11-1.63h-.29c-2.48,2.57-4.45,3.75-6.98,3.75-4.21,0-7.1-3.26-7.1-9.5,0-5.41,2.19-9.71,8.6-13.04,1.25-.65,2.92-1.41,4.27-1.99,.84-.36,1.38-1.19,1.38-2.1,0-1.73-.4-3.33-2.08-3.33-1.32,0-1.89,.99-2.16,2.53-.21,1.08-1.15,1.85-2.24,1.84h-4.14c-.67,0-1.31-.29-1.75-.81s-.62-1.19-.51-1.86c1.14-6.44,4.73-10.24,11.16-10.24,7.91,0,10.56,5.69,10.56,13.11v19.91c0,.84,.06,1.95,.15,3h0Zm-8.98-10.88c0-.99-.63-1.87-1.57-2.18s-1.98,.02-2.56,.82c-.63,.92-.96,2.01-.94,3.13,0,1.73,.69,2.57,1.9,2.57,.89-.04,1.74-.39,2.4-1,.5-.43,.79-1.06,.78-1.72v-1.62h0Z"/><path d="M236.56,141.45c0,7.39-4.38,11.47-12.14,11.47-5.26,0-8.82-1.9-8.82-6.55-.11-2.52,1.29-4.87,3.55-5.98v-.28c-1.84-.94-2.94-2.87-2.82-4.93,.07-2.75,1.24-5.36,3.23-7.25v-.35c-2.35-1.97-3.37-5.77-3.37-10.77v-1.83c0-8.24,3.51-12.81,8.68-12.81,2.82,0,5.08,1.41,6.51,4.22h.23c.41-1.42,1.26-2.68,2.42-3.59,.46-.3,1.04-.32,1.51-.06s.77,.76,.77,1.3v6.94c0,.76-.57,1.4-1.32,1.47h-.03c-.8,.08-1.39,.79-1.32,1.59,.06,.71,.08,1.39,.08,1.98v.77c0,8.03-3.28,12.81-8.63,12.81h-.45c-.63,0-1.21,.38-1.42,.97-.08,.21-.12,.43-.12,.65,0,.77,.55,1.34,1.66,1.41l4.11,.21c5.22,.28,7.66,3.1,7.67,8.59l.02,.02Zm-10.76,4.22c3.55,0,4.34-.99,4.34-2.4,0-.84-.32-1.69-2.26-1.76l-4.2-.18c-.45-.03-.89,.16-1.18,.5-.42,.5-.66,1.14-.67,1.79,0,1.48,1.25,2.04,3.97,2.04h0Zm-2.72-28.5c0,1.83,0,4.5,1.89,4.5s1.89-2.67,1.89-4.5v-2.18c0-1.83,0-4.51-1.89-4.51s-1.89,2.68-1.89,4.51v2.18Z"/><path d="M262.45,134.23c.05,.64-.16,1.27-.6,1.74s-1.04,.74-1.69,.74h-4.19c-1.2,0-2.2-.92-2.28-2.12-.04-.47-.07-1.01-.11-1.63h-.29c-2.48,2.57-4.45,3.75-6.98,3.75-4.21,0-7.1-3.26-7.1-9.5,0-5.41,2.19-9.71,8.6-13.04,1.25-.65,2.92-1.41,4.27-1.99,.84-.36,1.38-1.19,1.38-2.1,0-1.73-.4-3.33-2.08-3.33-1.32,0-1.89,.99-2.16,2.53-.21,1.08-1.15,1.85-2.24,1.84h-4.14c-.67,0-1.31-.29-1.75-.81s-.62-1.19-.51-1.86c1.14-6.44,4.73-10.24,11.16-10.24,7.91,0,10.56,5.69,10.56,13.11v19.91c0,.84,.06,1.95,.15,3h0Zm-8.98-10.88c0-.99-.63-1.87-1.57-2.18s-1.98,.02-2.56,.82c-.63,.92-.96,2.01-.94,3.13,0,1.73,.69,2.57,1.9,2.57,.89-.04,1.74-.39,2.4-1,.5-.43,.79-1.06,.78-1.72v-1.62h0Z"/><path d="M286.24,99.79v9.2c0,.39-.16,.76-.45,1.03s-.67,.4-1.06,.37c-.46-.03-.92-.05-1.32-.05-4.29,0-6.58,2.17-6.58,7.2v14.06l.05,3.68c0,.38-.14,.74-.4,1.01s-.62,.42-1,.42h-9.01c-.38,0-.74-.15-1-.42-.27-.27-.41-.63-.4-1.01l.05-3.68v-27.49l-.05-3.68c0-.38,.14-.74,.4-1.01,.26-.27,.62-.42,1-.42h8.04c.78,0,1.41,.63,1.41,1.41v4.26h.38c2.6-3.92,5.44-6.29,8.57-6.29h.02c.76,.02,1.37,.64,1.36,1.4h0Z"/><path d="M317.2,133.58c0,.88-.33,1.72-.95,2.35-.62,.62-1.46,.98-2.34,.98h-4.14c-1.81,0-3.29-1.47-3.29-3.29v-.54h-.29c-3.2,2.5-5.45,3.82-8.79,3.82-8.14,0-8.5-8-8.5-13.98v-10.15c0-6.81,.65-14.67,8.87-14.67,1.32-.01,2.62,.22,3.85,.7,1.01,.38,2.14,.24,3.03-.37,.88-.61,1.41-1.62,1.41-2.7v-4.16l-.03-1.74c-.01-.88,.33-1.73,.95-2.35,.62-.63,1.46-.98,2.34-.98h4.6c.88,0,1.72,.35,2.34,.98,.62,.63,.96,1.47,.95,2.35l-.03,1.74v39.56l.03,2.45h0Zm-11.15-24.23c.03-1.75-1.34-3.21-3.1-3.28h-.03c-2.91,0-2.91,3.12-2.91,5.08v11.32c0,2.18,0,4.72,2.76,4.72,.17,0,.33,0,.5-.03,1.61-.23,2.79-1.62,2.77-3.24v-14.56h.01Z"/><path d="M332.59,120.65c-.34,.34-.53,.8-.53,1.27v.62c0,2.7,0,5.05,3.17,5.05,3.49,0,3.49-2.83,3.49-4.15v-.21h11.99v.28c0,4.01-1.27,7.81-4.52,10.3-2.62,2-6.19,2.9-10.71,2.9-4.76,0-8.65-.97-11.19-2.97-3.57-2.83-4.44-7.26-4.44-13.76v-5.19c0-6.43,.88-10.85,4.44-13.69,2.54-2,6.43-3.04,11.03-3.04s8.41,1.04,10.95,3.04c3.73,2.9,4.44,7.54,4.44,13.69v3.53c0,.99-.8,1.8-1.8,1.8h-15.05c-.48,0-.94,.19-1.27,.53h0Zm2.65-14.08c-3.17,0-3.17,2.63-3.17,4.84,0,.99,.8,1.8,1.8,1.8h2.83c.99,0,1.8-.8,1.8-1.8,0-2.21,0-4.84-3.25-4.84h0Z"/><path d="M378.17,134.04c0,.7-.26,1.38-.76,1.88s-1.17,.78-1.87,.78h-4.67c-.71,0-1.38-.28-1.87-.78s-.77-1.18-.76-1.88l.03-2.48v-20.59c0-1.27,0-3.1-1.68-3.1-.78,.06-1.53,.34-2.16,.8-.75,.48-1.2,1.32-1.2,2.21v20.68l.03,2.48c0,.7-.27,1.38-.76,1.88s-1.17,.78-1.87,.78h-4.67c-.7,0-1.38-.28-1.87-.78s-.77-1.18-.76-1.88l.03-2.48v-27.71l-.04-3.12c0-.7,.27-1.38,.76-1.88s1.17-.78,1.87-.78h4.32c1.45,0,2.63,1.18,2.63,2.63v2.37h.06c3.16-3.17,5.61-5.01,9.1-5.01,3.94,0,6.07,2.4,6.07,7.9v25.6l.03,2.48h.01Z"/><path d="M35.96,209.36c0,8.75-6.94,13.87-17.74,13.87-7.34,0-12.96-2.31-16.24-6.82-1.29-1.86-1.46-4.27-.44-6.28,1.01-2.02,3.05-3.32,5.31-3.39l.49-.02c2.26-.05,4.36,1.2,5.4,3.21,.94,1.88,2.91,3.03,5.01,2.92,2.44,0,3.86-1.09,3.86-3.08s-1.42-3.76-5.68-6.02l-6.62-3.35c-6.15-3.28-9.31-7.66-9.31-13.4,0-8.54,6.86-14.35,17.98-14.29,6.02,.04,10.79,1.78,13.83,5.25,1.56,1.8,1.95,4.33,1,6.51s-3.06,3.63-5.44,3.72h-.05c-2.24,.1-4.36-1.04-5.51-2.97-.78-1.41-2.31-2.24-3.91-2.12-2.45,0-3.79,1.23-3.79,3.14,0,2.19,1.74,3.48,5.13,5.26l6.7,3.42c6.62,3.42,10.02,8.27,10.01,14.43h.01Z"/><path d="M55.61,201.19v5.19c0,6.64-.39,10.65-2.49,13.62-1.3,2.06-3.61,3.25-6.04,3.11-2.42,.15-4.72-1.05-5.99-3.11-2.1-3.04-2.5-6.98-2.5-13.62v-5.19c0-6.56,.39-10.65,2.5-13.62,1.29-2.04,3.58-3.23,5.99-3.11,2.42-.11,4.72,1.08,6.04,3.11,2.1,2.97,2.49,7.05,2.49,13.62Zm-6.74-2.55c0-2.56,0-5.05-1.79-5.05s-1.75,2.49-1.75,5.05v10.3c0,2.56,0,5.05,1.75,5.05s1.79-2.49,1.79-5.05v-10.3Z"/><path d="M83.09,220.44c0,.7-.26,1.38-.76,1.88-.49,.5-1.17,.78-1.87,.78h-4.67c-.7,0-1.38-.28-1.87-.78-.49-.5-.77-1.18-.76-1.88l.03-2.48v-20.59c0-1.27,0-3.1-1.68-3.1-.78,.06-1.53,.34-2.16,.8-.75,.48-1.2,1.32-1.2,2.21v20.68l.03,2.48c0,.7-.26,1.38-.76,1.88s-1.17,.78-1.87,.78h-4.67c-.71,0-1.38-.28-1.87-.78-.5-.5-.77-1.18-.76-1.88l.03-2.48v-27.71l-.04-3.12c0-.7,.27-1.38,.76-1.88s1.17-.78,1.87-.78h4.32c1.46,0,2.63,1.18,2.63,2.63v2.37h.07c3.16-3.17,5.61-5.01,9.1-5.01,3.94,0,6.06,2.4,6.06,7.9v25.6l.03,2.48h.01Z"/><path d="M101.24,211.91c0,6.98-2.93,11.2-7.7,11.2-4.14,0-6.96-3.39-7.78-10.79-.11-.99,.61-1.88,1.6-1.99l1.94-.22c.93-.1,1.79,.53,1.98,1.45,.44,2.04,1.28,3.12,2.38,3.12,1.02,0,1.56-.97,1.56-2.42,0-1.59-.67-2.7-2.42-4.15l-2.62-2.07c-2.77-2.21-4.06-5.81-4.06-10.58,0-6.36,2.66-10.99,7.43-10.99,3.98,0,6.42,3.14,7.15,9.54,.05,.48-.09,.96-.39,1.33s-.74,.61-1.22,.66l-1.91,.2c-.9,.08-1.73-.51-1.95-1.39-.36-1.36-.98-2.1-1.8-2.1-.98,0-1.64,.97-1.64,2.35,0,1.45,.55,2.28,2.07,3.59l2.58,2c3.28,2.56,4.81,6.36,4.81,11.27h-.01Z"/><path d="M132.59,199.17v10.15c0,5.98-.37,13.98-8.62,13.98-3.39,0-5.67-1.32-8.91-3.82h-.29v1.53c0,1.26-1.03,2.29-2.29,2.29h-6.29c-.61,0-1.2-.25-1.63-.68-.43-.44-.67-1.03-.66-1.64l.04-3.45v-39.56l-.04-2.75c0-.61,.23-1.2,.66-1.64s1.02-.68,1.63-.68h6.77c.61,0,1.2,.25,1.63,.68s.67,1.03,.66,1.64l-.04,2.75v5.7c0,.79,.42,1.53,1.09,1.95,.68,.42,1.52,.45,2.23,.1,1.57-.8,3.31-1.22,5.08-1.21,8.32,0,8.99,7.86,8.99,14.67h0Zm-11.27-.87c0-1.9,0-4.93-2.95-4.93-.55,0-1.1,.1-1.62,.27-.93,.31-1.56,1.19-1.55,2.17v15.56c0,.99,.64,1.87,1.57,2.18,.56,.2,1.15,.3,1.74,.31,2.8,0,2.8-2.46,2.8-4.58v-10.98h.01Z"/><path d="M147.95,207.04c-.34,.34-.53,.8-.52,1.27v.62c0,2.7,0,5.05,3.17,5.05,3.49,0,3.49-2.83,3.49-4.15v-.21h11.99v.28c0,4.01-1.27,7.81-4.52,10.3-2.62,2-6.19,2.9-10.71,2.9-4.76,0-8.65-.97-11.19-2.97-3.57-2.83-4.45-7.26-4.45-13.76v-5.19c0-6.43,.88-10.85,4.45-13.69,2.54-2,6.43-3.04,11.03-3.04s8.41,1.04,10.95,3.04c3.73,2.9,4.44,7.54,4.44,13.69v3.53c0,.99-.8,1.8-1.8,1.8h-15.05c-.48,0-.94,.19-1.27,.53h0Zm2.65-14.08c-3.17,0-3.17,2.63-3.17,4.84,0,.99,.8,1.8,1.8,1.8h2.83c.99,0,1.8-.8,1.8-1.8,0-2.21,0-4.84-3.25-4.84h-.01Z"/><path d="M181.43,207.04c-.34,.34-.53,.8-.52,1.27v.62c0,2.7,0,5.05,3.17,5.05,3.49,0,3.49-2.83,3.49-4.15v-.21h11.99v.28c0,4.01-1.27,7.81-4.52,10.3-2.62,2-6.19,2.9-10.71,2.9-4.76,0-8.65-.97-11.19-2.97-3.57-2.83-4.44-7.26-4.44-13.76v-5.19c0-6.43,.88-10.85,4.44-13.69,2.54-2,6.43-3.04,11.03-3.04s8.41,1.04,10.95,3.04c3.73,2.9,4.45,7.54,4.45,13.69v3.53c0,.99-.8,1.8-1.8,1.8h-15.05c-.48,0-.94,.19-1.27,.53h-.02Zm2.65-14.08c-3.17,0-3.17,2.63-3.17,4.84,0,.99,.8,1.8,1.8,1.8h2.83c.99,0,1.8-.8,1.8-1.8,0-2.21,0-4.84-3.25-4.84h-.01Z"/><path d="M217.09,222.21c-.47,.57-1.18,.9-1.92,.9h-1.29c-1.22,0-2.26-.88-2.46-2.08l-1.6-9.4c-.06-.37-.37-.65-.75-.68s-.72,.21-.83,.56c-.03,.08-.04,.17-.04,.25v6.21l.02,2.62c0,.67-.26,1.31-.73,1.78s-1.11,.74-1.77,.74h-1.04c-.67,0-1.31-.27-1.78-.74s-.73-1.11-.73-1.78l.02-2.62v-40.05l-.02-2.62c0-.67,.26-1.31,.73-1.78s1.11-.74,1.78-.74h1.04c.67,0,1.31,.27,1.77,.74,.47,.47,.73,1.11,.73,1.78l-.02,2.62v12.81c0,2.46-.04,4.29-.08,5.77h.2c.39-1.76,.86-3.66,1.37-5.49l1.2-4.05c.32-1.06,1.29-1.79,2.4-1.79h1.19c.79,0,1.54,.38,2.01,1.01,.47,.64,.61,1.46,.38,2.22l-2.96,9.7c-.12,.38-.14,.79-.07,1.18l3.79,20.88c.13,.73-.07,1.48-.54,2.05h0Z"/><path d="M242.15,171.77c.49,.65,.64,1.49,.42,2.27l-14.64,50.93c-.32,1.11-1.33,1.87-2.48,1.87h-2.54c-.81,0-1.58-.38-2.06-1.03-.49-.65-.64-1.49-.42-2.27l14.59-50.93c.32-1.11,1.33-1.87,2.49-1.87h2.6c.81,0,1.57,.38,2.06,1.03h-.02Z"/><path d="M284.2,214.03c.7,.7,1.1,1.66,1.1,2.65v2.78c0,2.07-1.68,3.75-3.75,3.75h-32.49c-2.07,0-3.75-1.68-3.75-3.75v-5.06c0-.77,.24-1.52,.68-2.15l16.25-23.18c.8-1.15,.9-2.64,.26-3.88-.64-1.24-1.93-2.02-3.33-2.02h-7.88c-2.07,0-3.75-1.68-3.75-3.75v-2.77c0-2.07,1.68-3.75,3.75-3.75h30.07c2.07,0,3.75,1.68,3.75,3.75v5.06c0,.77-.24,1.52-.68,2.15l-16.25,23.18c-.8,1.15-.9,2.64-.26,3.88,.64,1.24,1.93,2.02,3.33,2.02h10.3c.99,0,1.95,.39,2.65,1.1h0Z"/><path d="M307.6,185.16c.3,.35,.43,.82,.35,1.28l-6.28,37.72c-1.05,6.26-3.82,9.92-8.78,9.92-.97,0-1.93-.06-2.89-.17-.8-.09-1.41-.76-1.4-1.57v-6.06c0-.43,.17-.84,.48-1.13,.31-.3,.72-.46,1.15-.44,.23,0,.48,0,.76,0,2.2,0,2.96-1.69,2.53-4.65l-5.57-33.64c-.08-.46,.05-.93,.35-1.28,.3-.35,.74-.56,1.21-.56h4.21c.79,0,1.46,.58,1.56,1.36l2.05,14.83c.24,1.9,.43,4.44,.57,6.19h.19c.14-1.76,.38-4.36,.62-6.26l2.01-14.75c.11-.78,.78-1.37,1.56-1.37h4.11c.46,0,.9,.2,1.2,.56h.01Z"/><path d="M341.04,198.54v10.29c0,6.51-.39,14.77-9.46,14.77-1.71,.02-3.41-.33-4.97-1.04-.85-.37-1.84-.29-2.61,.23-.78,.51-1.24,1.38-1.24,2.31v4.17l.04,2.3c.01,.74-.28,1.45-.79,1.98-.52,.53-1.23,.82-1.97,.83h-6.66c-.74,0-1.45-.3-1.97-.83s-.81-1.24-.79-1.98l.04-2.3v-39l-.04-2.94c0-.74,.28-1.45,.8-1.98s1.23-.82,1.97-.82h6.15c1.53,0,2.77,1.24,2.77,2.77v1.09h.31c3.28-2.38,5.55-3.85,9.38-3.85,8.44,0,9.07,7.07,9.07,14h-.03Zm-11.96-.14c0-1.82-.16-4.55-2.97-4.55-.56,0-1.12,.1-1.65,.27-1.12,.38-1.88,1.43-1.87,2.62v14.68c-.02,1.3,.89,2.43,2.17,2.7,.37,.07,.74,.11,1.12,.11,2.89,0,3.21-2.52,3.21-4.83v-10.99h-.01Z"/><path d="M356.39,207.04c-.34,.34-.53,.8-.53,1.27v.62c0,2.7,0,5.05,3.17,5.05,3.49,0,3.49-2.83,3.49-4.15v-.21h11.99v.28c0,4.01-1.27,7.81-4.52,10.3-2.62,2-6.19,2.9-10.71,2.9-4.76,0-8.65-.97-11.19-2.97-3.57-2.83-4.44-7.26-4.44-13.76v-5.19c0-6.43,.88-10.85,4.44-13.69,2.54-2,6.43-3.04,11.03-3.04s8.41,1.04,10.95,3.04c3.73,2.9,4.44,7.54,4.44,13.69v3.53c0,.99-.8,1.8-1.8,1.8h-15.05c-.48,0-.94,.19-1.27,.53h0Zm2.65-14.08c-3.17,0-3.17,2.63-3.17,4.84,0,.99,.8,1.8,1.8,1.8h2.83c.99,0,1.8-.8,1.8-1.8,0-2.21,0-4.84-3.25-4.84h0Z"/><path d="M401.97,220.44c0,.7-.26,1.38-.76,1.88s-1.17,.78-1.87,.78h-4.67c-.71,0-1.38-.28-1.87-.78s-.77-1.18-.76-1.88l.03-2.48v-20.59c0-1.27,0-3.1-1.68-3.1-.78,.06-1.53,.34-2.16,.8-.75,.48-1.2,1.32-1.2,2.21v20.68l.03,2.48c0,.7-.27,1.38-.76,1.88s-1.17,.78-1.87,.78h-4.67c-.7,0-1.38-.28-1.87-.78s-.77-1.18-.76-1.88l.03-2.48v-27.71l-.04-3.12c0-.7,.27-1.38,.76-1.88s1.17-.78,1.87-.78h4.32c1.45,0,2.63,1.18,2.63,2.63v2.37h.06c3.16-3.17,5.61-5.01,9.1-5.01,3.94,0,6.07,2.4,6.07,7.9v25.6l.03,2.48h.01Z"/><path d="M432.93,219.98c0,.88-.33,1.72-.95,2.35-.62,.62-1.46,.98-2.34,.98h-4.14c-1.81,0-3.29-1.47-3.29-3.29v-.54h-.29c-3.2,2.5-5.45,3.82-8.79,3.82-8.14,0-8.5-8-8.5-13.98v-10.15c0-6.81,.65-14.67,8.87-14.67,1.32,0,2.62,.22,3.85,.7,1.01,.38,2.14,.24,3.03-.37,.88-.61,1.41-1.62,1.41-2.7v-4.16l-.03-1.74c-.01-.88,.33-1.73,.95-2.35,.62-.63,1.46-.98,2.34-.98h4.6c.88,0,1.72,.35,2.34,.98,.62,.63,.96,1.47,.95,2.35l-.03,1.74v39.56l.03,2.45h0Zm-11.15-24.23c.03-1.75-1.34-3.21-3.1-3.28h-.03c-2.91,0-2.91,3.12-2.91,5.08v11.32c0,2.18,0,4.72,2.76,4.72,.17,0,.33,0,.5-.03,1.61-.23,2.79-1.62,2.77-3.24v-14.56h.01Z"/><path d="M458.83,220.63c.05,.64-.16,1.27-.6,1.74s-1.04,.74-1.68,.74h-4.19c-1.2,0-2.19-.92-2.28-2.12-.04-.47-.07-1.01-.11-1.63h-.29c-2.48,2.57-4.45,3.75-6.98,3.75-4.21,0-7.1-3.26-7.1-9.5,0-5.41,2.2-9.71,8.6-13.04,1.25-.65,2.92-1.41,4.27-1.99,.84-.36,1.38-1.19,1.38-2.1,0-1.73-.4-3.33-2.08-3.33-1.32,0-1.89,.99-2.16,2.53-.21,1.08-1.15,1.85-2.24,1.84h-4.15c-.67,0-1.31-.29-1.75-.81s-.62-1.19-.51-1.86c1.14-6.44,4.73-10.24,11.16-10.24,7.91,0,10.56,5.69,10.56,13.11v19.91c0,.84,.06,1.95,.15,3Zm-8.98-10.88c0-.99-.63-1.87-1.57-2.18s-1.97,.02-2.56,.82c-.63,.92-.96,2.01-.94,3.13,0,1.73,.69,2.57,1.9,2.57,.89-.04,1.74-.39,2.4-1,.5-.43,.79-1.06,.78-1.72v-1.62h0Z"/><path d="M484.68,220.63c.05,.64-.16,1.27-.6,1.74s-1.04,.74-1.68,.74h-4.19c-1.2,0-2.19-.92-2.28-2.12-.04-.47-.07-1.01-.11-1.63h-.29c-2.48,2.57-4.45,3.75-6.98,3.75-4.21,0-7.1-3.26-7.1-9.5,0-5.41,2.2-9.71,8.6-13.04,1.25-.65,2.92-1.41,4.27-1.99,.84-.36,1.38-1.19,1.38-2.1,0-1.73-.4-3.33-2.08-3.33-1.32,0-1.89,.99-2.16,2.53-.21,1.08-1.15,1.85-2.24,1.84h-4.15c-.67,0-1.31-.29-1.75-.81s-.62-1.19-.51-1.86c1.14-6.44,4.73-10.24,11.16-10.24,7.91,0,10.56,5.69,10.56,13.11v19.91c0,.84,.06,1.95,.15,3Zm-8.98-10.88c0-.99-.63-1.87-1.57-2.18s-1.97,.02-2.56,.82c-.63,.92-.96,2.01-.94,3.13,0,1.73,.69,2.57,1.9,2.57,.89-.04,1.74-.39,2.4-1,.5-.43,.79-1.06,.78-1.72v-1.62h0Z"/><path d="M495.9,217.97l.03,2.52c0,.69-.26,1.36-.75,1.85s-1.15,.77-1.84,.77h-3.46c-.69,0-1.35-.28-1.84-.77s-.75-1.16-.75-1.85l.03-2.52v-40.05l-.03-2.52c0-.69,.26-1.36,.75-1.85s1.15-.77,1.84-.77h3.46c.69,0,1.35,.28,1.84,.77s.76,1.16,.75,1.85l-.03,2.52v40.05Z"/></svg>
`;
