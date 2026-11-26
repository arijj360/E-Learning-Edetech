package tn.esprit.edetech.apigateway.config;

import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.context.annotation.Configuration;

@Configuration
@LoadBalancerClient(name = "SIMULATION-SERVICE", configuration = RandomLoadBalancerConfig.class)
public class LoadBalancerConfig {
}