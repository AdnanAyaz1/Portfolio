import { motion } from 'motion/react';
import { slideIn, staggerContainer, staggerItem } from '../../variants';

const agents = [
  { name: 'Menu Analyst', desc: 'Categorizes items & analyzes pricing', model: 'Llama 3.1 8B' },
  { name: 'Weather Analyst', desc: 'Summarizes weather impact on demand', model: 'Llama 3.1 8B' },
  { name: 'Strategist', desc: 'Proposes promotions & discounts', model: 'Llama 3.3 70B' },
  { name: 'Critic', desc: 'Challenges plan & requests fixes', model: 'Llama 3.3 70B' },
  { name: 'Synthesizer', desc: 'Produces final recommendation', model: 'Llama 3.1 8B' },
];

const AgentsSection = () => (
  <motion.section
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.2 }}
    className='mb-16 xl:mb-28'
  >
    <motion.div
      variants={slideIn('up', 0.1)}
      className='text-center mb-10'
    >
      <div className='text-xs uppercase tracking-[3px] text-accent mb-3'>AI Architecture</div>
      <h2 className='h2'>5 agents, one intelligent pipeline.</h2>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4'
    >
      {agents.map((agent, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className='bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 rounded-2xl p-5 text-center will-change-transform'
        >
          <div className='text-xs font-mono text-accent/60 mb-2'>Agent {i + 1}</div>
          <div className='font-semibold mb-1'>{agent.name}</div>
          <div className='text-white/50 text-xs mb-3'>{agent.desc}</div>
          <div className='text-[10px] font-mono text-accent/40 bg-accent/5 rounded-full px-2 py-1 inline-block'>
            {agent.model}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default AgentsSection;
