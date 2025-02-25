import React from 'react';
import { motion } from 'framer-motion';

function AnimatedComponent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
        >
            <div>
                <p>벌써 26번째 생일이라니,,,</p>
            </div>
        </motion.div>
    );
}

export default AnimatedComponent;