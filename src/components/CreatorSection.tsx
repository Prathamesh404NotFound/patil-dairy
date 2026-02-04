import { motion } from 'framer-motion';
import { FiCode, FiPhone } from 'react-icons/fi';

const CreatorSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 bg-muted/30 border-y border-border"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <FiCode className="w-4 h-4" />
                        <span className="text-sm">Created by</span>
                        <span className="font-semibold text-foreground">Code Catalyst</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-border"></div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <FiPhone className="w-4 h-4" />
                        <a
                            href="tel:+917721906820"
                            className="text-sm hover:text-primary transition-colors font-medium"
                        >
                            +91 77219 06820
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CreatorSection;
